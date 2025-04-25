import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

interface PageTransitionProps {
  children: ReactNode;
}

const AnimationWrapper = styled(motion.div)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
  overflowY: 'auto',
  zIndex: 1,
  '& > *:not(button)': {
    position: 'relative',
    zIndex: 1,
  }
});

const ContentWrapper = styled(motion.div)({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
});

const animations = {
  pageWrapper: {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
  },
  pageContent: {
    initial: { 
      x: '100%',
      opacity: 0,
    },
    animate: { 
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.35,
        ease: [0.32, 0.72, 0, 1],
      }
    },
    exit: { 
      x: '-100%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.35,
        ease: [0.32, 0.72, 0, 1],
      }
    },
  }
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <AnimationWrapper
      initial={animations.pageWrapper.initial}
      animate={animations.pageWrapper.animate}
      exit={animations.pageWrapper.exit}
    >
      <ContentWrapper
        initial={animations.pageContent.initial}
        animate={animations.pageContent.animate}
        exit={animations.pageContent.exit}
      >
        {children}
      </ContentWrapper>
    </AnimationWrapper>
  );
};

export default PageTransition;