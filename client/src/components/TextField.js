import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

const TextField = ({ label, value, onChange }) => {
    return (
        <MuiTextField
            label={label}
            value={value}
            onChange={onChange}
            fullWidth
            margin="normal"
        />
    );
};

export default TextField;