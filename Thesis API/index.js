const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { spawn } = require('child_process');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a route for predictions
app.post('/predict', (req, res) => {
    const inputData = req.body;

    // Spawn a Python process to make a prediction
    const pythonProcess = spawn('python', ['predict.py', JSON.stringify(inputData)]);

    pythonProcess.stdout.on('data', (data) => {
        const result = data.toString();
        res.json({ prediction: result });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).send(data.toString());
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
