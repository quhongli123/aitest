import { useEffect, useState } from 'react';

const TAB_KEY = 'ai_academy_tab';
const HEARTBEAT_INTERVAL = 1000;

export const useTabGuard = () => {
  const [isMainTab, setIsMainTab] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    let heartbeatInterval: number;
    
    const checkTab = () => {
      const currentTab = localStorage.getItem(TAB_KEY);
      const now = Date.now();
      
      if (!currentTab || now - parseInt(currentTab) > 2000) {
        localStorage.setItem(TAB_KEY, now.toString());
        setIsMainTab(true);
        setShowWarning(false);
      } else if (!isMainTab) {
        setShowWarning(true);
      }
    };

    // 初始检查
    checkTab();

    // 设置心跳，定期更新时间戳
    if (isMainTab) {
      heartbeatInterval = window.setInterval(() => {
        localStorage.setItem(TAB_KEY, Date.now().toString());
      }, HEARTBEAT_INTERVAL);
    }

    // 监听storage变化
    const handleStorage = () => {
      checkTab();
    };

    window.addEventListener('storage', handleStorage);

    // 页面关闭或刷新时清理
    const handleUnload = () => {
      if (isMainTab) {
        localStorage.removeItem(TAB_KEY);
      }
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      if (heartbeatInterval) {
        window.clearInterval(heartbeatInterval);
      }
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('beforeunload', handleUnload);
      if (isMainTab) {
        localStorage.removeItem(TAB_KEY);
      }
    };
  }, [isMainTab]);

  return { isMainTab, showWarning };
}; 