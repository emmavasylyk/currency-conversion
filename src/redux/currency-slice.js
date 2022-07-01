import { createSlice } from '@reduxjs/toolkit';
import { currencyApi } from './currency-reduce';

const initialState = {
  data: { from: '', to: '', amount: null },
  result: null,
  dataUsd: { amount: null },
  rates: {},
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      currencyApi.endpoints.fetchCurrency.matchFulfilled,
      (state, { payload }) => {
        // console.log('payload0', payload);
        state.data = payload;
        state.result = payload.result;
        // console.log('payload.data', payload.data);
      },
    );

    builder.addMatcher(
      currencyApi.endpoints.fetchCurrencyLatest.matchFulfilled,
      (state, { payload }) => {
        console.log('payload', payload);
        state.dataUsd = payload;
        state.result = payload.result;
        state.rates = payload.rates;
      },
    );

    builder.addMatcher(
      currencyApi.endpoints.fetchCurrencyUsd.matchFulfilled,
      (state, { payload }) => {
        // console.log('payload', payload);
        state.dataUsd = payload;
        state.result = payload.result;
      },
    );
    builder.addMatcher(
      currencyApi.endpoints.fetchCurrencyEur.matchFulfilled,
      (state, { payload }) => {
        // console.log('payload', payload);
        state.dataUsd = payload;
        state.result = payload.result;
      },
    );

    builder.addMatcher(
      currencyApi.endpoints.fetchCurrencyPln.matchFulfilled,
      (state, { payload }) => {
        // console.log('payload', payload);
        state.dataUsd = payload;
        state.result = payload.result;
      },
    );
  },
});

export default currencySlice;
