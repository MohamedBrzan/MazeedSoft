// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Header from '../../interfaces/Header';
import { backendUrl } from '../constants';
import HeaderLinksChangeType from '../../types/HeaderLinksChangeType';

// Define a service using a base URL and expected endpoints
export const HeaderApi = createApi({
  reducerPath: 'HeaderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendUrl,
  }),
  endpoints: (builder) => ({
    getHeaderData: builder.query<Header, void>({
      query: () => 'header',
    }),
    updateHeaderLink: builder.mutation<HeaderLinksChangeType, any>({
      query: ({ id, ...data }) => ({
        url: `/header/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const { useGetHeaderDataQuery, useUpdateHeaderLinkMutation } = HeaderApi;
