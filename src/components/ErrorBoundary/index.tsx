import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Button, Typography, Container, Snackbar, Alert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  showSnackbar: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    showSnackbar: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('错误详情:', error, errorInfo);
  }

  private handleCopyDebugInfo = async () => {
    try {
      // 获取最近的网络请求
      const performanceEntries = performance.getEntriesByType('resource');
      const recentRequests = performanceEntries
        .filter(
          entry => entry.initiatorType === 'fetch' || entry.initiatorType === 'xmlhttprequest'
        )
        .slice(-10);

      // 获取请求和响应信息
      const debugInfo = {
        timestamp: new Date().toISOString(),
        error: this.state.error,
        recentRequests: recentRequests.map(entry => ({
          url: entry.name,
          duration: entry.duration,
          type: entry.initiatorType,
        })),
        userAgent: navigator.userAgent,
        currentUrl: window.location.href,
      };

      // 复制到剪贴板
      await navigator.clipboard.writeText(JSON.stringify(debugInfo, null, 2));
      this.setState({ showSnackbar: true });
    } catch (err) {
      console.error('复制调试信息失败:', err);
    }
  };

  private handleCloseSnackbar = () => {
    this.setState({ showSnackbar: false });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              textAlign: 'center',
              p: 3,
            }}
          >
            <Typography variant="h4" color="error" gutterBottom>
              抱歉，出错了
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {this.state.error?.message || '发生了一些意外错误'}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.reload()}
                sx={{ mr: 2 }}
              >
                刷新页面
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => (window.location.href = '/')}
                sx={{ mr: 2 }}
              >
                返回首页
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<ContentCopyIcon />}
                onClick={this.handleCopyDebugInfo}
              >
                复制调试信息
              </Button>
            </Box>
          </Box>
          <Snackbar
            open={this.state.showSnackbar}
            autoHideDuration={3000}
            onClose={this.handleCloseSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert onClose={this.handleCloseSnackbar} severity="success">
              调试信息已复制到剪贴板
            </Alert>
          </Snackbar>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
