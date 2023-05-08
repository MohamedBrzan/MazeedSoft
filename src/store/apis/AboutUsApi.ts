// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import AboutUs from '../../interfaces/AboutUs';
import { backendUrl } from '../constants';
import AboutUsDataChangeType from '../../types/AboutUsDataChangeType';

// Define a service using a base URL and expected endpoints
export const AboutUsApi = createApi({
  reducerPath: 'AboutUsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendUrl,
  }),
  endpoints: (builder) => ({
    getAboutUsData: builder.query<AboutUs, void>({
      query: () => 'about_us',
    }),
    updateAboutUsData: builder.mutation<AboutUsDataChangeType, any>({
      query: ({ ...data }) => ({
        url: `/about_us`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const { useGetAboutUsDataQuery, useUpdateAboutUsDataMutation } =
  AboutUsApi;
