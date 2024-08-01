import React, { useState, useEffect } from 'react';
import { Button, Container, Typography } from '@mui/material';
import ContactForm from './components/ContactForm';

const App = () => {
    
    return (
        <div style={{ backgroundColor: '#f9fbfc', paddingBottom: "50px"}}>
            <Container >
                <Typography variant="h4" gutterBottom>Edit Contact Information</Typography>
                <ContactForm />
            </Container>
        </div>
        
    );
};

export default App;