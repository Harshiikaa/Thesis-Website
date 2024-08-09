// src/pages/Dashboard.js

import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import Navbar from '../components/Navbar';

function Dashboard() {
    const [feature1, setFeature1] = useState('');
    const [feature2, setFeature2] = useState('');
    const [feature3, setFeature3] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const inputData = {
            feature1: parseFloat(feature1),
            feature2: parseFloat(feature2),
            feature3: parseFloat(feature3),
        };

        try {
            const response = await axios.post('http://localhost:5000/predict', inputData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setPrediction(response.data.prediction);
            setError(null);
        } catch (error) {
            setError('There was a problem with the prediction request');
            setPrediction(null);
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <Container maxWidth="sm" sx={{ mt: 4 }}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom align="center">
                        Emergency Department Discharge Prediction
                    </Typography>
                    <Typography variant="body1" gutterBottom align="center" color="textSecondary">
                        Enter the patient's details below to predict their discharge status.
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            '& .MuiTextField-root': { mb: 2, width: '100%' },
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <TextField
                            label="Age"
                            variant="outlined"
                            type="number"
                            value={feature1}
                            onChange={(e) => setFeature1(e.target.value)}
                        />
                        <TextField
                            label="Pulse"
                            variant="outlined"
                            type="number"
                            value={feature2}
                            onChange={(e) => setFeature2(e.target.value)}
                        />
                        <TextField
                            label="Blood Pressure (Systolic)"
                            variant="outlined"
                            type="number"
                            value={feature3}
                            onChange={(e) => setFeature3(e.target.value)}
                        />
                        {/* Add more fields as necessary */}
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Get Prediction
                        </Button>
                    </Box>
                    {prediction && (
                        <Box mt={4}>
                            <Typography variant="h6" align="center">
                                Prediction: <strong>{prediction}</strong>
                            </Typography>
                        </Box>
                    )}
                    {error && (
                        <Box mt={4}>
                            <Typography variant="h6" align="center" color="error">
                                {error}
                            </Typography>
                        </Box>
                    )}
                </Paper>
            </Container>
        </div>
    );
}

export default Dashboard;


// import axios from 'axios';
// import React, { useState } from 'react'

// const Dashboard = () => {
//     const [feature1, setFeature1] = useState('');
//     const [feature2, setFeature2] = useState('');
//     const [feature3, setFeature3] = useState('');
//     const [prediction, setPrediction] = useState(null);
//     const [error, setError] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const inputData = {
//             feature1: parseFloat(feature1),
//             feature2: parseFloat(feature2),
//             feature3: parseFloat(feature3),
//         };

//         try {
//             const response = await axios.post('http://localhost:5000/predict', inputData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             setPrediction(response.data.prediction);
//         } catch (error) {
//             setError('There was a problem with the prediction request');
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Prediction Dashboard</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Feature 1:
//                     <input
//                         type="number"
//                         value={feature1}
//                         onChange={(e) => setFeature1(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Feature 2:
//                     <input
//                         type="number"
//                         value={feature2}
//                         onChange={(e) => setFeature2(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Feature 3:
//                     <input
//                         type="number"
//                         value={feature3}
//                         onChange={(e) => setFeature3(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <button type="submit">Get Prediction</button>
//             </form>
//             {prediction && <p>Prediction: {prediction}</p>}
//             {error && <p>{error}</p>}
//         </div>
//     )
// }

// export default Dashboard



// import React, { useState } from 'react';
// import axios from 'axios';

// function Dashboard() {
//     const [feature1, setFeature1] = useState('');
//     const [feature2, setFeature2] = useState('');
//     const [feature3, setFeature3] = useState('');
//     const [prediction, setPrediction] = useState(null);
//     const [error, setError] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const inputData = {
//             feature1: parseFloat(feature1),
//             feature2: parseFloat(feature2),
//             feature3: parseFloat(feature3),
//         };

//         try {
//             const response = await axios.post('http://localhost:5000/predict', inputData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             setPrediction(response.data.prediction);
//         } catch (error) {
//             setError('There was a problem with the prediction request');
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Feature 1:
//                 <input
//                     type="number"
//                     value={feature1}
//                     onChange={(e) => setFeature1(e.target.value)}
//                 />
//             </label>
//             <label>
//                 Feature 2:
//                 <input
//                     type="number"
//                     value={feature2}
//                     onChange={(e) => setFeature2(e.target.value)}
//                 />
//             </label>
//             <label>
//                 Feature 3:
//                 <input
//                     type="number"
//                     value={feature3}
//                     onChange={(e) => setFeature3(e.target.value)}
//                 />
//             </label>
//             <button type="submit">Get Prediction</button>
//             {prediction && <p>Prediction: {prediction}</p>}
//             {error && <p>{error}</p>}
//         </form>
//     );
// }

// export default Dashboard;
