// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Footer from '../../interfaces/Footer';
import { backendUrl } from '../constants';
import FooterDataChangeType from '../../types/FooterDataChangeType';

// Define a service using a base URL and expected endpoints
export const FooterApi = createApi({
  reducerPath: 'FooterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendUrl,
  }),
  endpoints: (builder) => ({
    getFooterData: builder.query<Footer, void>({
      query: () => 'footer',
    }),
    updateFooterData: builder.mutation<FooterDataChangeType, any>({
      query: ({ ...data }) => ({
        url: `/footer`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const { useGetFooterDataQuery, useUpdateFooterDataMutation } = FooterApi;
