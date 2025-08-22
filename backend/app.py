# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np

# Initialize the Flask app
app = Flask(__name__)
# Enable CORS to allow requests from your React frontend
CORS(app)

# --- Load the saved model, scaler, and feature names ---
try:
    xgb_model = joblib.load('xgb_model.joblib')
    scaler = joblib.load('scaler.joblib')
    feature_names = joblib.load('feature_names.joblib')
    print("✅ Model and artifacts loaded successfully.")
except FileNotFoundError:
    print("❌ Error: Model files not found. Please run train_model.py first.")
    # In a real app, you might handle this more gracefully
    exit()

# Define the prediction function
def predict_wave_type(input_data):
    df = pd.DataFrame([input_data], columns=feature_names)
    scaled_data = scaler.transform(df)
    prediction = xgb_model.predict(scaled_data)
    probability = xgb_model.predict_proba(scaled_data)
    
    if prediction[0] == 1:
        confidence = probability[0][1] * 100
        return {"prediction": "Kallakkadal", "value": 1, "confidence": f"{confidence:.2f}%"}
    else:
        confidence = probability[0][0] * 100
        return {"prediction": "Normal", "value": 0, "confidence": f"{confidence:.2f}%"}

# --- Define the API Endpoint ---
@app.route('/predict', methods=['POST'])
def handle_prediction():
    # Get the JSON data sent from the frontend
    if not request.json:
        return jsonify({"error": "Missing JSON in request"}), 400
    
    input_data = request.json
    
    # You might want to add validation here to ensure all keys are present
    
    try:
        # Get the prediction
        result = predict_wave_type(input_data)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# This allows you to run the app directly
if __name__ == "__main__":
    print("Starting Flask server...")
    # Using port 5000 for the backend
    app.run(debug=True, port=5000)