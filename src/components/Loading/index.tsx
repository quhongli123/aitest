/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-18 19:03:12
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-18 19:11:39
 * @FilePath: /work/AI/src/components/Loading/index.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { Box, Typography } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

const float = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-12px) scale(1.02);
  }
`;

const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dots = keyframes`
  0%, 20% {
    content: '.';
  }
  40% {
    content: '..';
  }
  60%, 100% {
    content: '...';
  }
`;

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
`;

const LoadingContainer = styled(Box)({
  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LoadingContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

const BubbleWrapper = styled(Box)({
  position: 'relative',
  width: '70px',
  height: '70px',
  animation: `${float} 2.5s ease-in-out infinite`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Bubble = styled(Box)({
  width: '100%',
  height: '100%',
  background: 'rgba(255, 255, 255, 0.15)',
  borderRadius: '50%',
  position: 'absolute',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: `
    inset 0 0 20px rgba(255, 255, 255, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.2)
  `,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '150%',
    height: '150%',
    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.4) 60%, transparent 70%)',
    animation: `${wave} 3s linear infinite`,
    transform: 'translate(-50%, -50%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '15%',
    left: '15%',
    width: '25%',
    height: '25%',
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '50%',
    filter: 'blur(3px)',
  },
});

const StyledTypography = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.9)',
  fontWeight: 700,
  fontSize: '1.1rem',
  letterSpacing: '1px',
  textShadow: '0 1px 3px rgba(0,0,0,0.15)',
  position: 'relative',
  zIndex: 1,
});

const LoadingText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '0.9rem',
  fontWeight: 500,
  letterSpacing: '1px',
  animation: `${fadeInOut} 2s ease-in-out infinite`,
  position: 'relative',
  '&::after': {
    content: '""',
    animation: `${dots} 2s steps(1, end) infinite`,
  },
});

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <BubbleWrapper>
          <Bubble />
          <StyledTypography>
            AI
          </StyledTypography>
        </BubbleWrapper>
        <LoadingText>
          加载中
        </LoadingText>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default Loading; 