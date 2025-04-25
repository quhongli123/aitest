import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SvgIconComponent } from '@mui/icons-material';

interface ToolCardProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
  onClick?: () => void;
}

const StyledCard = styled(Card)({
  height: '100%',
  cursor: 'pointer',
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(20px) saturate(180%)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  position: 'relative',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(130, 87, 229, 0.05) 0%, rgba(164, 80, 255, 0.05) 50%, rgba(130, 87, 229, 0.1) 100%)',
    opacity: 0,
    transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
    opacity: 0.5,
    transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(31, 38, 135, 0.15)',
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    
    '&::before': {
      opacity: 1,
    },
    
    '&::after': {
      opacity: 0.8,
    },
    
    '& .icon-wrapper': {
      transform: 'scale(1.1)',
      background: 'linear-gradient(135deg, rgba(130, 87, 229, 0.15), rgba(164, 80, 255, 0.15))',
      boxShadow: '0 4px 20px rgba(130, 87, 229, 0.15)',
    },
    
    '& .icon': {
      color: '#8257E5',
      filter: 'drop-shadow(0 2px 4px rgba(130, 87, 229, 0.2))',
    }
  }
});

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '20px',
  background: 'linear-gradient(135deg, rgba(130, 87, 229, 0.08), rgba(164, 80, 255, 0.08))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 12px rgba(130, 87, 229, 0.1)',
}));

const ToolCard = ({ icon: Icon, title, description, onClick }: ToolCardProps) => {
  return (
    <StyledCard onClick={onClick}>
      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <IconWrapper className="icon-wrapper">
          <Icon className="icon" sx={{ fontSize: 32 }} />
        </IconWrapper>
        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ 
            mb: 1,
            fontWeight: 600,
            color: '#1A1A1A'
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            lineHeight: 1.6,
            opacity: 0.8
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ToolCard; 