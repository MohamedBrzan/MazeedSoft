import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { backendURL } from './constants/appApis';

export const HomeApi = createApi({
  reducerPath: 'HomeApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${backendURL}/home` }),
  endpoints: (builder) => ({
    getHomeData: builder.query({
      query: () => '/',
    }),
  }),
});

export const useGetHomeDataQuery = HomeApi.endpoints.getHomeData.matchFulfilled;
