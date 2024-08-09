import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
// import HospitalIcon from '@mui/icons-material/HospitalIcon';

function Navbar() {
    return (
        <AppBar position="static" style={{ backgroundColor: '#004d99' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    {/* <HospitalIcon /> */}
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Emergency Department Dashboard
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/predict">Prediction</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
