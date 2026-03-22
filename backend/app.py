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
<<<<<<< HEAD
DEV_EMAIL    = os.environ.get('DEV_EMAIL',    'developer@opendrap.ai')
=======
DEV_EMAIL = os.environ.get('DEV_EMAIL', 'developer@opendrap.ai')
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
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


<<<<<<< HEAD
# ── Table bootstraps ──────────────────────────────────────────────────

def ensure_contact_table(cursor):
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contact_submissions (
            id           BIGINT PRIMARY KEY AUTO_INCREMENT,
            first_name   VARCHAR(100)  NOT NULL,
            last_name    VARCHAR(100)  NOT NULL,
            email        VARCHAR(255)  NOT NULL,
            phone        VARCHAR(50)   NULL,
            company      VARCHAR(255)  NULL,
            inquiry_type VARCHAR(100)  NOT NULL,
            message      TEXT          NOT NULL,
            created_at   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    """)

# keep old name as alias so nothing breaks
ensure_table = ensure_contact_table


def ensure_reviews_table(cursor):
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS reviews (
            id         BIGINT   PRIMARY KEY AUTO_INCREMENT,
            name       VARCHAR(150) NOT NULL,
            role       VARCHAR(200) NULL,
            rating     TINYINT  NOT NULL DEFAULT 5,
            message    TEXT     NOT NULL,
            approved   TINYINT  NOT NULL DEFAULT 0,
=======
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
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    """)


<<<<<<< HEAD
def ensure_clients_table(cursor):
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS clients (
            id         BIGINT   PRIMARY KEY AUTO_INCREMENT,
            name       VARCHAR(200) NOT NULL,
            company    VARCHAR(200) NULL,
            industry   VARCHAR(150) NULL,
            website    VARCHAR(300) NULL,
            logo       MEDIUMTEXT   NULL,
            notes      TEXT         NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    """)
    # Add logo column if the table existed before this migration
    try:
        cursor.execute("ALTER TABLE clients ADD COLUMN logo MEDIUMTEXT NULL")
    except Exception:
        pass  # column already exists — ignore


=======
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
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


<<<<<<< HEAD
def _serialize_row(row: dict) -> dict:
    """Convert datetime objects to ISO strings for JSON serialisation."""
    for key, val in row.items():
        if hasattr(val, 'isoformat'):
            row[key] = val.isoformat()
    return row


# ── Auth ──────────────────────────────────────────────────────────────

@app.post('/api/auth/login')
def login():
    body     = request.get_json(silent=True) or {}
    email    = body.get('email', '').strip()
=======
# ── Auth routes ───────────────────────────────────────────────────────

@app.post('/api/auth/login')
def login():
    body = request.get_json(silent=True) or {}
    email = body.get('email', '').strip()
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
    password = body.get('password', '')

    if email == DEV_EMAIL and password == DEV_PASSWORD:
        return jsonify({'ok': True, 'token': create_token(email), 'email': email})

    return jsonify({'error': 'Invalid email or password'}), 401


@app.get('/api/auth/me')
@require_auth
def me():
<<<<<<< HEAD
    token   = request.headers['Authorization'].split(' ', 1)[1]
=======
    token = request.headers['Authorization'].split(' ', 1)[1]
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
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
<<<<<<< HEAD
        conn   = get_conn()
        cursor = conn.cursor(dictionary=True)
        ensure_contact_table(cursor)
=======
        conn = get_conn()
        cursor = conn.cursor(dictionary=True)
        ensure_table(cursor)
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
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
<<<<<<< HEAD
        rows = [_serialize_row(r) for r in cursor.fetchall()]
        cursor.close(); conn.close()
=======
        rows = cursor.fetchall()
        for row in rows:
            if row.get('createdAt'):
                row['createdAt'] = row['createdAt'].isoformat()
        cursor.close()
        conn.close()
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
        return jsonify({'ok': True, 'data': rows})
    except Exception as e:
        return jsonify({'error': 'Failed to fetch submissions', 'details': str(e)}), 500


@app.post('/api/contact')
def post_contact():
<<<<<<< HEAD
    body         = request.get_json(silent=True) or {}
    first_name   = body.get('firstName',   '').strip()
    last_name    = body.get('lastName',    '').strip()
    email        = body.get('email',       '').strip()
    phone        = body.get('phone',       '').strip()
    company      = body.get('company',     '').strip()
    inquiry_type = body.get('inquiryType', '').strip()
    message      = body.get('message',     '').strip()
=======
    body = request.get_json(silent=True) or {}
    first_name   = body.get('firstName', '').strip()
    last_name    = body.get('lastName', '').strip()
    email        = body.get('email', '').strip()
    phone        = body.get('phone', '').strip()
    company      = body.get('company', '').strip()
    inquiry_type = body.get('inquiryType', '').strip()
    message      = body.get('message', '').strip()
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926

    if not all([first_name, last_name, email, inquiry_type, message]):
        return jsonify({'error': 'Missing required fields'}), 400

    try:
<<<<<<< HEAD
        conn   = get_conn()
        cursor = conn.cursor()
        ensure_contact_table(cursor)
=======
        conn = get_conn()
        cursor = conn.cursor()
        ensure_table(cursor)
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
        cursor.execute("""
            INSERT INTO contact_submissions
                (first_name, last_name, email, phone, company, inquiry_type, message)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, (first_name, last_name, email, phone, company, inquiry_type, message))
        conn.commit()
<<<<<<< HEAD
        cursor.close(); conn.close()
=======
        cursor.close()
        conn.close()
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
        return jsonify({'ok': True}), 201
    except Exception as e:
        return jsonify({'error': 'Failed to save submission', 'details': str(e)}), 500


<<<<<<< HEAD
# ── Reviews ───────────────────────────────────────────────────────────

@app.post('/api/reviews')
def submit_review():
    """Public — submit a new review (stored unapproved until admin approves)."""
    body    = request.get_json(silent=True) or {}
    name    = body.get('name',    '').strip()
    role    = body.get('role',    '').strip()
    rating  = max(1, min(5, int(body.get('rating', 5) or 5)))
    message = body.get('message', '').strip()

    if not name or not message:
        return jsonify({'error': 'Name and message are required'}), 400

    try:
        conn   = get_conn()
        cursor = conn.cursor()
        ensure_reviews_table(cursor)
        cursor.execute(
            "INSERT INTO reviews (name, role, rating, message) VALUES (%s, %s, %s, %s)",
            (name, role, rating, message)
        )
        conn.commit()
        cursor.close(); conn.close()
        return jsonify({'ok': True}), 201
    except Exception as e:
        return jsonify({'error': 'Failed to save review', 'details': str(e)}), 500


@app.get('/api/reviews/public')
def get_reviews_public():
    """Public — approved reviews only (shown on home page)."""
    try:
        conn   = get_conn()
        cursor = conn.cursor(dictionary=True)
        ensure_reviews_table(cursor)
        cursor.execute("""
            SELECT id, name, role, rating, message, created_at AS createdAt
            FROM reviews
            WHERE approved = 1
            ORDER BY created_at DESC
            LIMIT 20
        """)
        rows = [_serialize_row(r) for r in cursor.fetchall()]
        cursor.close(); conn.close()
        return jsonify({'ok': True, 'data': rows})
    except Exception as e:
        return jsonify({'error': 'Failed to fetch reviews', 'details': str(e)}), 500


@app.get('/api/reviews')
@require_auth
def get_reviews_all():
    """Admin — all reviews with approval status."""
    try:
        conn   = get_conn()
        cursor = conn.cursor(dictionary=True)
        ensure_reviews_table(cursor)
        cursor.execute("""
            SELECT id, name, role, rating, message, approved, created_at AS createdAt
            FROM reviews
            ORDER BY created_at DESC
        """)
        rows = [_serialize_row(r) for r in cursor.fetchall()]
        cursor.close(); conn.close()
        return jsonify({'ok': True, 'data': rows})
    except Exception as e:
        return jsonify({'error': 'Failed to fetch reviews', 'details': str(e)}), 500


@app.route('/api/reviews/<int:review_id>/approve', methods=['PATCH'])
@require_auth
def approve_review(review_id):
    """Admin — approve or unapprove a review."""
    body     = request.get_json(silent=True) or {}
    approved = 1 if body.get('approved') else 0
    try:
        conn   = get_conn()
        cursor = conn.cursor()
        cursor.execute("UPDATE reviews SET approved = %s WHERE id = %s", (approved, review_id))
        conn.commit()
        cursor.close(); conn.close()
        return jsonify({'ok': True})
    except Exception as e:
        return jsonify({'error': 'Failed to update review', 'details': str(e)}), 500


@app.delete('/api/reviews/<int:review_id>')
@require_auth
def delete_review(review_id):
    """Admin — permanently delete a review."""
    try:
        conn   = get_conn()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM reviews WHERE id = %s", (review_id,))
        conn.commit()
        cursor.close(); conn.close()
        return jsonify({'ok': True})
    except Exception as e:
        return jsonify({'error': 'Failed to delete review', 'details': str(e)}), 500


# ── Clients ───────────────────────────────────────────────────────────

@app.get('/api/clients')
@require_auth
def get_clients():
    """Admin — list all clients."""
    try:
        conn   = get_conn()
        cursor = conn.cursor(dictionary=True)
        ensure_clients_table(cursor)
        cursor.execute("""
            SELECT id, name, company, industry, website, logo, notes,
                   created_at AS createdAt
            FROM clients
            ORDER BY created_at DESC
        """)
        rows = [_serialize_row(r) for r in cursor.fetchall()]
        cursor.close(); conn.close()
        return jsonify({'ok': True, 'data': rows})
    except Exception as e:
        return jsonify({'error': 'Failed to fetch clients', 'details': str(e)}), 500


@app.post('/api/clients')
@require_auth
def add_client():
    """Admin — add a new client (logo stored as base64 data-URL)."""
    body     = request.get_json(silent=True) or {}
    name     = body.get('name',     '').strip()
    company  = body.get('company',  '').strip()
    industry = body.get('industry', '').strip()
    website  = body.get('website',  '').strip()
    logo     = body.get('logo',     None)   # base64 data-URL string or None
    notes    = body.get('notes',    '').strip()

    if not name:
        return jsonify({'error': 'Client name is required'}), 400

    try:
        conn   = get_conn()
        cursor = conn.cursor()
        ensure_clients_table(cursor)
        cursor.execute(
            "INSERT INTO clients (name, company, industry, website, logo, notes) VALUES (%s,%s,%s,%s,%s,%s)",
            (name, company, industry, website, logo or None, notes)
        )
        conn.commit()
        cursor.close(); conn.close()
        return jsonify({'ok': True}), 201
    except Exception as e:
        return jsonify({'error': 'Failed to add client', 'details': str(e)}), 500


@app.delete('/api/clients/<int:client_id>')
@require_auth
def delete_client(client_id):
    """Admin — permanently delete a client."""
    try:
        conn   = get_conn()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM clients WHERE id = %s", (client_id,))
        conn.commit()
        cursor.close(); conn.close()
        return jsonify({'ok': True})
    except Exception as e:
        return jsonify({'error': 'Failed to delete client', 'details': str(e)}), 500


# ── Entry point ───────────────────────────────────────────────────────

=======
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
if __name__ == '__main__':
    port = int(os.environ.get('API_PORT', 4001))
    app.run(port=port, debug=True)
