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
    fetchCurrencyLatest: builder.query({
      query: () => ({
        url: '/latest?base=UAH&symbols=USD,EUR,PLN',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
            : ['Post'],
      }),
      invalidatesTags: ['Contact'],
    }),
    fetchCurrencyUsd: builder.query({
      query: ({ quantity }) => ({
        url: `/convert?from=UAH&to=USD&amount=${quantity}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
            : ['Post'],
      }),
      invalidatesTags: ['Contact'],
    }),
    fetchCurrencyEur: builder.query({
      query: ({ quantity }) => ({
        url: `/convert?from=UAH&to=EUR&amount=${quantity}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
            : ['Post'],
      }),
      invalidatesTags: ['Contact'],
    }),
    fetchCurrencyPln: builder.query({
      query: ({ quantity }) => ({
        url: `/convert?from=UAH&to=PLN&amount=${quantity}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
            : ['Post'],
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchCurrencyQuery,
  useFetchCurrencyUsdQuery,
  useFetchCurrencyEurQuery,
  useFetchCurrencyPlnQuery,
  useFetchCurrencyLatestQuery,
} = currencyApi;
