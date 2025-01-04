import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      // Get token from localStorage or your auth state
      const token = localStorage.getItem('token');

      // If token exists, add authorization header
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        localStorage.setItem('token', 'Hello');
      }

      return headers;
    },
    fetchFn: async (...args) => {
      console.log('🚀 API Request:', {
        url: args[0],
        options: args[1],
      });
      const response = await fetch(...args);
      const responseData = await response.clone().json();

      console.log('📦 API Response:', {
        status: response.status,
        data: responseData,
      });

      return response;
    },
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      transformResponse: (response) => {
        console.log('Transform Response:', response);
        return response;
      },
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
