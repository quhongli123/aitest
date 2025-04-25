/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-18 19:32:43
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-25 17:01:35
 * @FilePath: /aitest/src/components/BackButton/index.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StyledIconButton = styled(IconButton)({
//  两岸三地
  background: 'transparent',
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  outline: 'none !important',

  zIndex: 1100,
  cursor: 'pointer',
  
  '&:hover': {
    background: 'transparent',
    transform: 'translateX(-2px)',
  },

  '&:focus': {
    outline: 'none',
  },

  '&:active': {
    outline: 'none',
  },

  '& .MuiSvgIcon-root': {
    fontSize: '28px',
    color: '#fff',
    transition: 'transform 0.3s ease',
  },

  '&:hover .MuiSvgIcon-root': {
    transform: 'scale(1.1)',
  },

  '@media (max-width: 600px)': {
    top: '16px',
    left: '16px',
  }
});

interface BackButtonProps extends Omit<IconButtonProps, 'onClick'> {
  to?: string;
}

const BackButton = ({ to, ...props }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <StyledIconButton
      onClick={handleClick}
      aria-label="返回"
      disableRipple
      disableFocusRipple
      disableTouchRipple
      {...props}
    >
      <ArrowBack />
    </StyledIconButton>
  );
};

export default BackButton; 