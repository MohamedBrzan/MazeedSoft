// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Features from '../../interfaces/Features';
import { backendUrl } from '../constants';
import FeaturesDataChangeType from '../../types/FeaturesDataChangeType';

// Define a service using a base URL and expected endpoints
export const FeaturesApi = createApi({
  reducerPath: 'FeaturesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendUrl,
  }),
  endpoints: (builder) => ({
    getFeaturesData: builder.query<Features, void>({
      query: () => 'features',
    }),
    getFeatureById: builder.query<Features, void>({
      query: (id) => `features/${id}`,
    }),
    updateFeature: builder.mutation<FeaturesDataChangeType, any>({
      query: ({ id, ...data }) => ({
        url: `/features/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetFeaturesDataQuery,
  useGetFeatureByIdQuery,
  useUpdateFeatureMutation,
} = FeaturesApi;
