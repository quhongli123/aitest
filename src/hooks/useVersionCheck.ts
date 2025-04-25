/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-19 11:26:25
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-19 11:27:00
 * @FilePath: /AI/src/hooks/useVersionCheck.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { useEffect, useState } from 'react';

const VERSION_KEY = 'app_version';
const VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';

export const useVersionCheck = () => {
    const [showUpdate, setShowUpdate] = useState(false);

    useEffect(() => {
        const checkVersion = () => {
            const savedVersion = localStorage.getItem(VERSION_KEY);
            if (savedVersion !== VERSION) {
                setShowUpdate(true);
                localStorage.setItem(VERSION_KEY, VERSION);
            }
        };

        checkVersion();
    }, []);

    return { showUpdate, setShowUpdate };
};