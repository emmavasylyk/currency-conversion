import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { currencyApi } from '../redux/currency-reduce';
import currencySlice from './currency-slice';
import storage from 'redux-persist/lib/storage';

const currencyPersistConfig = {
  key: 'currency',
  storage,
};

export const store = configureStore({
  reducer: {
    currency: persistReducer(currencyPersistConfig, currencySlice.reducer),
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    currencyApi.middleware,
  ],
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);
