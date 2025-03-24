import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const authAPI = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/auth',
        prepareHeaders: headers => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Profile'],
    endpoints: builder => ({
        login: builder.mutation({
            query: data => ({
                url: '/login',
                method: 'POST',
                body: data,
            }),
            transformResponse: (response) => {
                localStorage.setItem('token', response.token);
                return response;
            },
        }),
        register: builder.mutation({
            query: data => ({
                url: '/register',
                method: 'POST',
                body: data,
            }),
            transformResponse: (response) => {
                localStorage.setItem('token', response.token);
                return response;
            },
        }),
        getProfile: builder.query({
            query: () => ({
                url: '/profile',
                method: 'GET',
            }),
            providesTags: result => result
                ? [...result.map(({ id }) => ({ type: 'Profile', id })), { type: 'Profile' }]
                : [{ type: 'Profile' }],
        }),
    }),
});
export const { useLoginMutation, useRegisterMutation, useGetProfileQuery } = authAPI;
