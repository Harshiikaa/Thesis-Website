// Function to make a prediction request
async function getPrediction(inputData) {
    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Prediction result:', result.prediction);
        return result.prediction;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Example input data
const inputData = {
    feature1: 0.5,
    feature2: 1.2,
    feature3: -0.3,
};

// Call the function
getPrediction(inputData);
