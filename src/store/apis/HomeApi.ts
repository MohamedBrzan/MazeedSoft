// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Home from '../../interfaces/Home';
import { backendUrl } from '../constants';
import HomeDataChangeType from '../../types/HomeDataChangeType';

// Define a service using a base URL and expected endpoints
export const HomeApi = createApi({
  reducerPath: 'HomeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendUrl,
  }),
  endpoints: (builder) => ({
    getHomeData: builder.query<Home, void>({
      query: () => 'home',
    }),
    updateHomeData: builder.mutation<HomeDataChangeType, any>({
      query: ({ ...data }) => ({
        url: `/home`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const { useGetHomeDataQuery, useUpdateHomeDataMutation } = HomeApi;
