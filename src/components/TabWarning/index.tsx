import { Dialog, DialogContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface TabWarningProps {
  open: boolean;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    padding: theme.spacing(3),
    maxWidth: '400px',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
}));

const IconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  '& svg': {
    fontSize: 48,
    color: '#ef4444',
  },
});

const TabWarning = ({ open }: TabWarningProps) => {
  return (
    <StyledDialog
      open={open}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>
        <IconWrapper>
          <ErrorOutlineIcon />
        </IconWrapper>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ color: '#1a1a1a', fontWeight: 600 }}
        >
          AI 工具已在其他标签页运行
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: 'text.secondary', mt: 1 }}
        >
          请关闭此标签页，在原标签页中继续使用
        </Typography>
      </DialogContent>
    </StyledDialog>
  );
};

export default TabWarning; 