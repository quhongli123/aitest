/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-18 18:51:03
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-19 13:30:35
 * @FilePath: /AI/src/routes/index.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loading from '../components/Loading';
import Layout from '../components/Layout';
import PageTransition from '../components/PageTransition';
import {
  routes 
} from './routes';
// 路由配置


const Router = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<Layout />}>
        {routes.map(({ path, component: Component, isLazy, redirect }) => {
          // 如果存在重定向配置，直接返回重定向路由
          if (redirect) {
            return (
              <Route
                key={path}
                path={path}
                element={<Navigate to={redirect} replace />}
              />
            );
          }

          return (
            <Route
              key={path}
              path={path}
              element={
                isLazy ? (
                  <Suspense fallback={<Loading />}>
                    <AnimatePresence mode="wait">
                      <PageTransition>
                        <Component />
                      </PageTransition>
                    </AnimatePresence>
                  </Suspense>
                ) : (
                  <AnimatePresence mode="wait">
                    <PageTransition>
                      <Component />
                    </PageTransition>
                  </AnimatePresence>
                )
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Router;