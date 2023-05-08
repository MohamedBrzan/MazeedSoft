// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Testimonials from '../../interfaces/Testimonials';
import { backendUrl } from '../constants';
import TestimonialsDataChangeType from '../../types/TestimonialsDataChangeType';

// Define a service using a base URL and expected endpoints
export const TestimonialsApi = createApi({
  reducerPath: 'TestimonialsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendUrl,
  }),
  endpoints: (builder) => ({
    getTestimonialsData: builder.query<Testimonials, void>({
      query: () => 'testimonials',
    }),
    getTestimonialById: builder.query<Testimonials, void>({
      query: (id) => `testimonials/${id}`,
    }),
    updateTestimonial: builder.mutation<TestimonialsDataChangeType, any>({
      query: ({ id, ...data }) => ({
        url: `/testimonials/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetTestimonialsDataQuery,
  useGetTestimonialByIdQuery,
  useLazyGetTestimonialByIdQuery,
  useUpdateTestimonialMutation,
} = TestimonialsApi;
