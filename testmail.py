import smtplib
from email.mime.text import MIMEText

# Zoho SMTP settings
smtp_server = "smtppro.zoho.in"
port = 465  # SSL
username = "info@opendrap.website"
password = "Opendrap@dev2026"  # 16-character app password from Zoho

# Email content
msg = MIMEText("Hello! This is a test email from Zoho SMTP.")
msg["Subject"] = "Test Email"
msg["From"] = username
msg["To"] = "dhamotharan21072@gmail.com"

# Connect and send email
with smtplib.SMTP_SSL(smtp_server, port) as server:
    server.login(username, password)
    server.send_message(msg)

print("Email sent successfully!")