from flask import Flask, request, jsonify
from passwordGenerator import generate_password
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['GET'])
def get_password():
    try:
        # Get query parameters
        length = int(request.args.get("length", 12))
        use_symbols = request.args.get("use_symbols", "true").lower() == "true"
        use_numbers = request.args.get("use_numbers", "true").lower() == "true"
        exclude_chars = request.args.get("exclude_chars", "")

        # Generate password
        password = generate_password(length, use_symbols, use_numbers, exclude_chars)

        return jsonify({"password": password})
    
    except ValueError:
        return jsonify({"error": "Invalid parameter value"}), 400

if __name__ == "__main__":
    app.run(debug=True)
    
if __name__ == "__main__":
    port = int(os.getenv("PORT", 80))  # Make sure it's using 80
    app.run(host="0.0.0.0", port=port)