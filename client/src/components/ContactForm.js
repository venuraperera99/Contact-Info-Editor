import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { Form, Row, CountrySelect, CountryCard, CountryIcon, Label, CustomTextField, CustomButton, ProfilePictureWrapper, ProfilePicture, PencilIconStyled, HiddenFileInput } from '../styles/ContactFormStyles';
import CanadaIcon from '../assets/canada-2 1.svg';
import USAIcon from '../assets/united-states 1.svg';
import PencilIcon from '../assets/icons8-pencil-64.png';
import DefaultProfilePic from "../assets/Untitled_Artwork 16 copy 3 1.svg";

const ContactForm = () => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        jobTitle: '',
        country: '',
    });
    const [profilePic, setProfilePic] = useState(DefaultProfilePic);
    const fileInputRef = useRef(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/contact`)
            .then(response => {
                if (response.data) {
                    setContact({
                        firstName: response.data.first_name,
                        lastName: response.data.last_name,
                        phoneNumber: response.data.phone_number,
                        jobTitle: response.data.job_title,
                        country: response.data.country,
                    });
                }
            })
            .catch(error => {
                console.error('There was an error fetching the contact data', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prev => ({ ...prev, [name]: value }));
    };

    const handleCountrySelect = (country) => setContact(prev => ({ ...prev, country }));

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfilePic(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/contact`, contact)
            .then(response => {
                console.log('Contact saved:', response.data);
            })
            .catch(error => {
                console.error('There was an error saving the contact data', error);
            });
    };

    const openFilePicker = () => fileInputRef.current?.click();

    return (
        <Form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" alignItems="center" mb={3} position="relative">
                <ProfilePictureWrapper>
                    <ProfilePicture src={profilePic} alt="Profile" />
                </ProfilePictureWrapper>
                <PencilIconStyled src={PencilIcon} alt="Edit" onClick={openFilePicker} />
                <HiddenFileInput
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </Box>
            <Row>
                <Box flex={1}>
                    <Label variant="subtitle1">First Name</Label>
                    <CustomTextField
                        label="First Name"
                        name="firstName"
                        value={contact.firstName}
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
                <Box flex={1}>
                    <Label variant="subtitle1">Last Name</Label>
                    <CustomTextField
                        label="Last Name"
                        name="lastName"
                        value={contact.lastName}
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
            </Row>
            <Box>
                <Label variant="subtitle1">Phone Number</Label>
                <CustomTextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={contact.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                />
            </Box>
            <Box>
                <Label variant="subtitle1">Job Title</Label>
                <CustomTextField
                    label="Job Title"
                    name="jobTitle"
                    value={contact.jobTitle}
                    onChange={handleChange}
                    fullWidth
                />
            </Box>
            <Box>
                <Label variant="subtitle1">Select Country</Label>
                <CountrySelect>
                    <CountryCard
                        selected={contact.country === 'Canada'}
                        onClick={() => handleCountrySelect('Canada')}
                    >
                        <CountryIcon src={CanadaIcon} alt="Canada" />
                        <Typography>Canada</Typography>
                    </CountryCard>
                    <CountryCard
                        selected={contact.country === 'United States'}
                        onClick={() => handleCountrySelect('United States')}
                    >
                        <CountryIcon src={USAIcon} alt="United States" />
                        <Typography>USA</Typography>
                    </CountryCard>
                </CountrySelect>
            </Box>
            <CustomButton type="submit" variant="contained">
                Save
            </CustomButton>
        </Form>
    );
};

export default ContactForm;
