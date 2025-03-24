import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthResponse, ILoginRequest, IRegisterRequest, IUserProfile } from '../types/types';
export const authAPI = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token') || '';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Profile'],
  endpoints: builder => ({
    login: builder.mutation<IAuthResponse, ILoginRequest>({
      query: data => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: IAuthResponse) => {
        localStorage.setItem('token', response.token);
        return response;
      },
    }),
    register: builder.mutation<IAuthResponse, IRegisterRequest>({
      query: data => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: IAuthResponse) => {
        localStorage.setItem('token', response.token);
        return response;
      },
    }),
    getProfile: builder.query<IUserProfile[], void>({
      query: () => ({
        url: '/profile',
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? [...result.map(({ id }) => ({ type: 'Profile' as const, id })), { type: 'Profile' }]
          : [{ type: 'Profile' }],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetProfileQuery } = authAPI;
