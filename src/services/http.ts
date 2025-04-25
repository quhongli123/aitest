/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-19 13:25:20
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-19 13:32:00
 * @FilePath: /AI/src/services/http.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import axios, { AxiosError, AxiosResponse } from 'axios';

// 创建 axios 实例
export const http = axios.create({
  baseURL:  '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // 处理未授权
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// 通用响应类型
export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// 通用请求错误
export class ApiError extends Error {
  constructor(
    public code: number,
    message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
} 