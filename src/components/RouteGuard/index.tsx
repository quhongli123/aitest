/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-18 19:15:41
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-18 20:22:57
 * @FilePath: /AI/src/components/RouteGuard/index.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useAITool } from '../../context/AIToolContext';
// import ConfirmDialog from '../ConfirmDialog';

const toolNames: { [key: string]: string } = {
  '/voice-clone': '语音克隆工坊',
  '/text-tuning': '文本微调器',
  '/prompt-helper': '提示词助手',
  '/digital-human': '数字人制作',
};

interface RouteGuardProps {
  children: ReactNode;
}

const RouteGuard = ({ children }: RouteGuardProps) => {
  const location = useLocation();
  // const navigate = useNavigate();
  const { currentTool, setCurrentTool } = useAITool();
  const [, setShowDialog] = useState(false);
  const [, setPendingPath] = useState<string | null>(null);

  const isAIToolRoute = (path: string) => {
    return Object.keys(toolNames).includes(path);
  };

  useEffect(() => {
    const path = location.pathname;
    
    if (!isAIToolRoute(path)) {
      return;
    }

    if (currentTool && path !== currentTool) {
      setPendingPath(path);
      setShowDialog(true);
    } else {
      setCurrentTool(path);
    }
  }, [location, currentTool, setCurrentTool]);

  // const handleConfirm = () => {
  //   if (pendingPath) {
  //     setCurrentTool(pendingPath);
  //     navigate(pendingPath);
  //   }
  //   setShowDialog(false);
  //   setPendingPath(null);
  // };

  // const handleCancel = () => {
  //   if (currentTool) {
  //     navigate(currentTool);
  //   }
  //   setShowDialog(false);
  //   setPendingPath(null);
  // };

  return (
    <>
      {children}
      {/* <ConfirmDialog
        open={showDialog}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        currentTool={currentTool ? toolNames[currentTool] : ''}
      /> */}
    </>
  );
};

export default RouteGuard; 