import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.exchangerate.host',
    prepareHeaders: headers => {
      return headers;
    },
  }),
  tagTypes: ['Currency'],
  endpoints: builder => ({
    fetchCurrency: builder.query({
      query: ({ from, to, quantity }) => ({
        url: `/convert?from=${from}&to=${to}&amount=${quantity}`,
        keepUnusedDataFor: 0,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
            : ['Post'],
      }),
      invalidatesTags: ['Currency'],
    }),
    fetchCurrencyEur: builder.query({
      query: () => ({
        url: '/latest?base=EUR&symbols=USD,UAH,PLN',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
            : ['Post'],
      }),
      invalidatesTags: ['Currency'],
    }),
    fetchCurrencyLatest: builder.query({
      query: () => ({
        url: '/latest?base=UAH&symbols=USD,EUR,PLN',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
            : ['Post'],
      }),
      invalidatesTags: ['Currency'],
    }),

    fetchCurrencyPln: builder.query({
      query: () => ({
        url: '/latest?base=PLN&symbols=USD,UAH,EUR',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
            : ['Post'],
      }),
      invalidatesTags: ['Currency'],
    }),

    fetchCurrencyUsd: builder.query({
      query: () => ({
        url: '/latest?base=USD&symbols=PLN,UAH,EUR',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
            : ['Post'],
      }),
      invalidatesTags: ['Currency'],
    }),
  }),
});

export const {
  useFetchCurrencyQuery,
  useFetchCurrencyLatestQuery,
  useFetchCurrencyEurQuery,
  useFetchCurrencyUsdQuery,
  useFetchCurrencyPlnQuery,
} = currencyApi;
