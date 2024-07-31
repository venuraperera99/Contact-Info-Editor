import { styled } from '@mui/material/styles';
import { Box, Typography, TextField, Button } from '@mui/material';

export const Form = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

export const Row = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
}));

export const CountrySelect = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
    alignItems: 'center',
}));

export const CountryCard = styled('div')(({ theme, selected }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${selected ? '#fbc2a2' : '#d3d3d3'}`,
    backgroundColor: selected ? '#ffdecc' : '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
}));

export const CountryIcon = styled('img')({
    width: 150,
    height: 150,
});

export const Label = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#fec7a9',
        },
        '&:hover fieldset': {
            borderColor: '#fec7a9',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#fec7a9',
        },
    },
    backgroundColor: '#ffffff',
}));

export const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#ff6d1d',
    '&:hover': {
        backgroundColor: '#e65a1e',
    },
}));

export const ProfilePictureWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid #d3d3d3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
}));

export const ProfilePicture = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const PencilIconStyled = styled('img')({
    position: 'relative',
    bottom: 60,
    left: 80,
    width: 32,
    height: 32,
    borderRadius: '50%',
    backgroundColor: '#ff6d1d',
    border: '2px solid #ff6d1d',
    cursor: 'pointer',
    zIndex: 20,
});

export const HiddenFileInput = styled('input')({
    display: 'none',
});
