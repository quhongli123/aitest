/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-19 13:25:43
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-19 13:25:59
 * @FilePath: /AI/src/services/api/user.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import { http, ApiResponse } from '../http';

interface User {
  id: string;
  name: string;
  email: string;
}

interface LoginParams {
  email: string;
  password: string;
}

// API 函数
const userApi = {
  getCurrentUser: () => 
    http.get<ApiResponse<User>>('/user/current'),
  
  login: (params: LoginParams) =>
    http.post<ApiResponse<{ token: string }>>('/auth/login', params),
  
  updateProfile: (data: Partial<User>) =>
    http.put<ApiResponse<User>>('/user/profile', data),
};

// Query Hooks
export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['user', 'current'],
    queryFn: () => userApi.getCurrentUser(),
  });
};

// Mutation Hooks
export const useLogin = () => {
  return useMutation({
    mutationFn: userApi.login,
    onSuccess: (response) => {
      localStorage.setItem('token', response.data.token);
    },
  });
};

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: userApi.updateProfile,
  });
}; 