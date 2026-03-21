import os
from datetime import datetime, timedelta, timezone
from functools import wraps

import mysql.connector
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

import jwt

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '..', '.env'))

app = Flask(__name__)
CORS(app)

SECRET_KEY = os.environ.get('JWT_SECRET', 'dev-secret-change-in-production')
JWT_EXP_HOURS = 8

# ── Hardcoded developer credentials (move to DB/env for production) ──
DEV_EMAIL = os.environ.get('DEV_EMAIL', 'developer@opendrap.ai')
DEV_PASSWORD = os.environ.get('DEV_PASSWORD', 'Qwerty@123')


# ── DB ────────────────────────────────────────────────────────────────

def get_conn():
    return mysql.connector.connect(
        host=os.environ['TIDB_HOST'],
        port=int(os.environ['TIDB_PORT']),
        user=os.environ['TIDB_USER'],
        password=os.environ['TIDB_PASSWORD'],
        database=os.environ['TIDB_DATABASE'],
        ssl_disabled=False,
    )


def ensure_table(cursor):
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contact_submissions (
            id BIGINT PRIMARY KEY AUTO_INCREMENT,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50),
            company VARCHAR(255),
            inquiry_type VARCHAR(100) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    """)


# ── JWT helpers ───────────────────────────────────────────────────────

def create_token(email: str) -> str:
    payload = {
        'sub': email,
        'exp': datetime.now(timezone.utc) + timedelta(hours=JWT_EXP_HOURS),
    }
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')


def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.headers.get('Authorization', '')
        if not auth.startswith('Bearer '):
            return jsonify({'error': 'Missing token'}), 401
        token = auth.split(' ', 1)[1]
        try:
            jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401
        return f(*args, **kwargs)
    return decorated


# ── Auth routes ───────────────────────────────────────────────────────

@app.post('/api/auth/login')
def login():
    body = request.get_json(silent=True) or {}
    email = body.get('email', '').strip()
    password = body.get('password', '')

    if email == DEV_EMAIL and password == DEV_PASSWORD:
        return jsonify({'ok': True, 'token': create_token(email), 'email': email})

    return jsonify({'error': 'Invalid email or password'}), 401


@app.get('/api/auth/me')
@require_auth
def me():
    token = request.headers['Authorization'].split(' ', 1)[1]
    payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
    return jsonify({'ok': True, 'email': payload['sub']})


# ── Health ────────────────────────────────────────────────────────────

@app.get('/api/health')
def health():
    try:
        conn = get_conn()
        conn.close()
        return jsonify({'ok': True})
    except Exception as e:
        return jsonify({'ok': False, 'error': str(e)}), 500


# ── Contact ───────────────────────────────────────────────────────────

@app.get('/api/contact')
@require_auth
def get_contacts():
    try:
        conn = get_conn()
        cursor = conn.cursor(dictionary=True)
        ensure_table(cursor)
        cursor.execute("""
            SELECT id,
                   first_name  AS firstName,
                   last_name   AS lastName,
                   email, phone, company,
                   inquiry_type AS inquiryType,
                   message,
                   created_at  AS createdAt
            FROM contact_submissions
            ORDER BY created_at DESC
        """)
        rows = cursor.fetchall()
        for row in rows:
            if row.get('createdAt'):
                row['createdAt'] = row['createdAt'].isoformat()
        cursor.close()
        conn.close()
        return jsonify({'ok': True, 'data': rows})
    except Exception as e:
        return jsonify({'error': 'Failed to fetch submissions', 'details': str(e)}), 500


@app.post('/api/contact')
def post_contact():
    body = request.get_json(silent=True) or {}
    first_name   = body.get('firstName', '').strip()
    last_name    = body.get('lastName', '').strip()
    email        = body.get('email', '').strip()
    phone        = body.get('phone', '').strip()
    company      = body.get('company', '').strip()
    inquiry_type = body.get('inquiryType', '').strip()
    message      = body.get('message', '').strip()

    if not all([first_name, last_name, email, inquiry_type, message]):
        return jsonify({'error': 'Missing required fields'}), 400

    try:
        conn = get_conn()
        cursor = conn.cursor()
        ensure_table(cursor)
        cursor.execute("""
            INSERT INTO contact_submissions
                (first_name, last_name, email, phone, company, inquiry_type, message)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, (first_name, last_name, email, phone, company, inquiry_type, message))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'ok': True}), 201
    except Exception as e:
        return jsonify({'error': 'Failed to save submission', 'details': str(e)}), 500


if __name__ == '__main__':
    port = int(os.environ.get('API_PORT', 4001))
    app.run(port=port, debug=True)
