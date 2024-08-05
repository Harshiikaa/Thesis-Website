import sys
import json
import joblib

# Load the model
model = joblib.load('final_model.pkl')

def predict(data):
    # Convert input data to the format your model expects
    # For example, if your model expects a list of features:
    input_data = [data['feature1'], data['feature2'], ...]
    prediction = model.predict([input_data])
    return prediction[0]

if __name__ == "__main__":
    input_data = json.loads(sys.argv[1])
    prediction = predict(input_data)
    print(prediction)
