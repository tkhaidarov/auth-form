import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserProfile } from '../types/types';

export const usersAPI = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/users',
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query<IUserProfile[], void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    blockUser: builder.mutation<void, string>({
      query: id => ({
        url: `/${id}/block`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Users'],
    }),
    unBlockUser: builder.mutation<void, string>({
      query: id => ({
        url: `/${id}/unblock`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<void, string>({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});
export const {
  useGetUsersQuery,
  useBlockUserMutation,
  useUnBlockUserMutation,
  useDeleteUserMutation,
} = usersAPI;
