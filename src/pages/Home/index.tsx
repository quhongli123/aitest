import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import MicIcon from '@mui/icons-material/Mic';
import EditIcon from '@mui/icons-material/Edit';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledCard = styled(Card)({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  opacity: 0,
  animation: `${fadeIn} 0.6s ease-out forwards`,
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    '&::before': {
      opacity: 1,
    },
    '& .icon-wrapper': {
      transform: 'scale(1.1) translateY(-5px)',
      color: '#6366f1',
    },
    '& .card-content': {
      transform: 'translateY(-5px)',
    },
  },
});

const IconWrapper = styled(Box)({
  fontSize: '3rem',
  marginBottom: '20px',
  color: '#7c3aed',
  display: 'flex',
  justifyContent: 'center',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '& svg': {
    fontSize: 48,
  },
});

const features = [
  {
    title: '语音克隆工坊',
    description: '录制你的声音，生成专属语音模型',
    icon: <MicIcon />,
    path: '/voice-clone',
    delay: 100,
  },
  {
    title: '文本微调器',
    description: '帮助 AI 学习说话',
    icon: <EditIcon />,
    path: '/text-tuning',
    delay: 200,
  },
  {
    title: '提示词助手',
    description: '学习如何与 AI 对话，获得更好回答',
    icon: <LightbulbIcon />,
    path: '/prompt-helper',
    delay: 300,
  },
  {
    title: '数字人制作',
    description: '创建会互动的个性化虚拟形象',
    icon: <SmartToyIcon />,
    path: '/digital-human',
    delay: 400,
  },
];

const FlexBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '32px',
  justifyContent: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
});

const CardBox = styled(Box)({
  flex: '1 1 250px',
  maxWidth: '300px',
  minWidth: '250px',
});

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        minHeight: '100vh',
        paddingTop: '8vh',
        paddingBottom: '40px',
      }}
    >
      <Container>
        <Box textAlign="center" mb={6} sx={{ animation: `${fadeIn} 0.6s ease-out` }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              color: 'white',
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            AI 学院
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            探索人工智能的奇妙世界
          </Typography>
        </Box>

        <FlexBox>
          {features.map((feature, index) => (
            <CardBox key={index}>
              <StyledCard
                onClick={() => navigate(feature.path)}
                sx={{ animationDelay: `${feature.delay}ms` }}
              >
                <CardContent 
                  className="card-content"
                  sx={{ 
                    textAlign: 'center', 
                    py: 4,
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <IconWrapper className="icon-wrapper">
                    {feature.icon}
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      color: '#1a1a1a',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      color: 'rgba(0,0,0,0.7)',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </CardBox>
          ))}
        </FlexBox>
      </Container>
    </Box>
  );
};

export default Home; 