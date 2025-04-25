import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, showBack = true, onBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '64px',
        px: 2,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        position: 'relative',
        zIndex: 1000,
      }}
    >
      {showBack && (
        <IconButton color="inherit" onClick={handleBack} sx={{ mr: 2 }} aria-label="返回">
          <ArrowBackIcon />
        </IconButton>
      )}
      <Typography variant="h6" component="h1" sx={{ flex: 1 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Header;