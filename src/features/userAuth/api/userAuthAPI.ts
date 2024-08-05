//shared api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//shared constants
import { JWT_TOKEN } from '@/shared/constants/jwtToken';
//types
import { IUser } from '@/entities/users/types/userTypes';
import { IUserAuthResponse, IUsersTokenResponse } from '../types/userAuthTypes';

const userAuthAPI = jsonPlaceholderAPI.injectEndpoints({
  endpoints: (build) => ({
    getToken: build.query<IUsersTokenResponse, void>({
      query: () => ({
        url: '/token',
        method: 'GET'
      }),
      transformResponse: (response: IUsersTokenResponse) => {
        localStorage.setItem(JWT_TOKEN, response.token);
        return response;
      }
    }),
    registerUser: build.mutation<IUserAuthResponse, IUser>({
      query: (user) => ({
        url: '/user',
        method: 'POST',
        body: user,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN)}`
        }
      }),
      invalidatesTags: ['Users']
    })
  })
});

export const { useRegisterUserMutation, useGetTokenQuery } = userAuthAPI;
