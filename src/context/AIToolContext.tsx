/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-18 19:14:56
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-19 12:01:29
 * @FilePath: /AI/Users/ali/Desktop/Ai/src/context/AIToolContext.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { createContext, useContext, useState, ReactNode } from 'react';

interface AIToolContextType {
  currentTool: string | null;
  setCurrentTool: (tool: string | null) => void;
}

const AIToolContext = createContext<AIToolContextType | undefined>(undefined);

export const AIToolProvider = ({ children }: { children: ReactNode }) => {
  const [currentTool, setCurrentTool] = useState<string | null>(null);

  return (
    <AIToolContext.Provider value={{ currentTool, setCurrentTool }}>
      {children}
    </AIToolContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAITool = () => {
  const context = useContext(AIToolContext);
  if (context === undefined) {
    throw new Error('useAITool must be used within an AIToolProvider');
  }
  return context;
}; 