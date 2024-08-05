// redux
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//constants
import { jsonPlaceholderBaseURL } from '../constants/jsonPlaceholderBaseURL';

export const jsonPlaceholderAPI = createApi({
  reducerPath: 'jsonPlaceholderAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: jsonPlaceholderBaseURL
  }),
  tagTypes: ['Users', 'Positions'],

  endpoints: () => ({})
});
