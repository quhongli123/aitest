import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const GradientBackground = styled(Box)({
  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const IconWrapper = styled(Box)({
  fontSize: '120px',
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: '24px',
  animation: `${float} 3s ease-in-out infinite`,
  display: 'flex',
  justifyContent: 'center',
});

const StyledButton = styled(Button)({
  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  padding: '12px 32px',
  color: 'white',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  fontSize: '1.1rem',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-2px)',
  },
});

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <GradientBackground>
      <Container maxWidth="sm">
        <Box
          textAlign="center"
          sx={{
            animation: `${fadeIn} 0.6s ease-out`,
          }}
        >
          <IconWrapper>
            <LockIcon sx={{ fontSize: 'inherit' }} />
          </IconWrapper>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              color: 'white',
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              mb: 2,
            }}
          >
            401
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              mb: 4,
              fontWeight: 500,
            }}
          >
            抱歉，您需要登录后才能访问此页面
          </Typography>
          <StyledButton
            onClick={() => navigate('/login')}
            variant="contained"
            size="large"
          >
            去登录
          </StyledButton>
        </Box>
      </Container>
    </GradientBackground>
  );
};

export default Unauthorized;