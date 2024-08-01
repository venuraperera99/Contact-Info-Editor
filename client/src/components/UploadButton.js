import React from 'react';
import { Button } from '@mui/material';

const UploadButton = ({ onChange }) => {
    return (
        <Button variant="contained" component="label">
            Upload Profile Picture
            <input
                type="file"
                hidden
                onChange={onChange}
            />
        </Button>
    );
};

export default UploadButton;