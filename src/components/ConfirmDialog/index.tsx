/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-18 19:19:41
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-18 20:28:40
 * @FilePath: /AI/src/components/ConfirmDialog/index.tsx
 * @Description: 确认弹窗组件
 */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  // DialogActions,
  // Button,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
// 测试部署
interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  currentTool: string;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    padding: theme.spacing(2),
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
  },
}));

const IconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '16px',
  '& svg': {
    fontSize: 48,
    color: '#f59e0b',
  },
});

// const StyledButton = styled(Button)({
//   borderRadius: '8px',
//   padding: '8px 24px',
//   textTransform: 'none',
//   fontSize: '1rem',
// });

const ConfirmDialog = ({ open, onClose, currentTool }: ConfirmDialogProps) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ textAlign: 'center', pb: 0 }}>
        <IconWrapper>
          <WarningAmberIcon />
        </IconWrapper>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6" align="center" gutterBottom>
          已有 AI 工具正在运行
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          当前正在运行: {currentTool}
          <br />
          是否停止并打开新的 AI 工具？
        </Typography>
      </DialogContent>
   
    </StyledDialog>
  );
};

export default ConfirmDialog; 