from flask import Flask, jsonify
from flask_cors import CORS
from routes.contact import contact_bp

def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable CORS for all routes

    # Register Blueprints
    app.register_blueprint(contact_bp)

    # Global error handler
    @app.errorhandler(500)
    def internal_error(error):
        return jsonify({'error': 'An internal error occurred'}), 500

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
