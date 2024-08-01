from flask import Blueprint, request, jsonify
from db import get_db_connection

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/contact', methods=['GET'])
def get_contact():
    connection = get_db_connection()
    if connection:
        cursor = connection.cursor(dictionary=True)
        cursor.execute('SELECT * FROM contacts LIMIT 1;')
        contact = cursor.fetchone()
        cursor.close()
        connection.close()
        return jsonify(contact or {})
    else:
        return jsonify({'error': 'Failed to connect to the database'}), 500

@contact_bp.route('/contact', methods=['POST'])
def save_contact():
    data = request.json
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    phone_number = data.get('phoneNumber')
    job_title = data.get('jobTitle')
    country = data.get('country')

    connection = get_db_connection()
    if connection:
        cursor = connection.cursor()
        cursor.execute('DELETE FROM contacts;')
        cursor.execute(
            'INSERT INTO contacts (first_name, last_name, phone_number, job_title, country) VALUES (%s, %s, %s, %s, %s)',
            (first_name, last_name, phone_number, job_title, country)
        )
        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({'status': 'success'}), 200
    else:
        return jsonify({'error': 'Failed to connect to the database'}), 500
