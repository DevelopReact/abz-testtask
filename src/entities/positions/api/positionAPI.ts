//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { IPosition, IPositionsResponse } from '../types/positionTypes';

const positionAPI = jsonPlaceholderAPI.injectEndpoints({
  endpoints: (build) => ({
    getPositions: build.query<IPosition[], void>({
      query: () => ({
        url: '/positions',
        method: 'GET'
      }),
      transformResponse: (response: IPositionsResponse) => response.positions,
      providesTags: [{ type: 'Positions', id: 'LIST' }]
    })
  })
});

export const { useGetPositionsQuery } = positionAPI;
