/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-18 18:47:29
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-18 18:51:17
 * @FilePath: /work/AI/src/main.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
