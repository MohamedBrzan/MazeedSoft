// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CallUs from '../../interfaces/CallUs';
import { backendUrl } from '../constants';
import CallUsDataChangeType from '../../types/CallUsDataChangeType';

// Define a service using a base URL and expected endpoints
export const CallUsApi = createApi({
  reducerPath: 'CallUsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendUrl,
  }),
  endpoints: (builder) => ({
    getCallUsData: builder.query<CallUs, void>({
      query: () => 'call_us',
    }),
    updateCallUsData: builder.mutation<CallUsDataChangeType, any>({
      query: ({ id, ...data }) => ({
        url: `/call_us`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const { useGetCallUsDataQuery, useUpdateCallUsDataMutation } = CallUsApi;
