import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: 2,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: 4,
          fontWeight: 'bold',
          color: '#1a237e',
          textAlign: 'center',
        }}
      >
        Добро
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/main')}
        sx={{
          backgroundColor: '#1a237e',
          '&:hover': {
            backgroundColor: '#283593',
          },
          borderRadius: 2,
          padding: '12px 32px',
          fontSize: '1.2rem',
          textTransform: 'none',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        Начать
      </Button>
    </Box>
  );
};

export default WelcomePage; 