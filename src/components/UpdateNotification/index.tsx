import { Snackbar, Alert, Button } from '@mui/material';
import { useVersionCheck } from '@/hooks/useVersionCheck';

const UpdateNotification = () => {
  const { showUpdate, setShowUpdate } = useVersionCheck();

  const handleClose = () => {
    setShowUpdate(false);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Snackbar
      open={showUpdate}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity="info"
        sx={{ width: '100%' }}
        action={
          <Button color="inherit" size="small" onClick={handleRefresh}>
            刷新
          </Button>
        }
      >
        发现新版本，请刷新页面以获取最新内容！
      </Alert>
    </Snackbar>
  );
};

export default UpdateNotification;
