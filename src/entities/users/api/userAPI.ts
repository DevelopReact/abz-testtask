//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { IUsersResponse } from '../types/userTypes';

const userAPI = jsonPlaceholderAPI.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<IUsersResponse, number>({
      query: (page) => ({
        url: `/users?page=${page}&count=6`,
        method: 'GET'
      }),
      providesTags: [{ type: 'Users', id: 'LIST' }]
    }),

    getUserId: build.query<IUsersResponse, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'GET'
      }),
      providesTags: (_, __, id) => [{ type: 'Users', id: id }]
    })
  })
});

export const { useGetUsersQuery, useGetUserIdQuery } = userAPI;
