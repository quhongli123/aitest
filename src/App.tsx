/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-18 18:47:29
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-19 11:29:41
 * @FilePath: /AI/src/App.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Router from './routes';
import TabWarning from './components/TabWarning';
import { useTabGuard } from './hooks/useTabGuard';
import UpdateNotification from '@/components/UpdateNotification';
import ErrorBoundary from '@/components/ErrorBoundary';

function App() {
  const { isMainTab, showWarning } = useTabGuard();

  if (!isMainTab) {
    return (
      <ErrorBoundary>
        <UpdateNotification />
        <CssBaseline />
        <TabWarning open={showWarning} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
