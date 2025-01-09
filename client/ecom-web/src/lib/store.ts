import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import storage from '@/components/storage';
import productsReducer from '@/lib/features/products/productsSlice';
import { productApi } from '@/lib/features/products/productApi';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  // whitelist: ['products', 'productApi'],
  whitelist: ['products'],
};
const rootReducer = combineReducers({
  products: productsReducer,
  [productApi.reducerPath]: productApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(productApi.middleware),
  });

  const persistor = persistStore(store);
  return { store, persistor };
};

const store = makeStore().store;

export type AppStore = typeof store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
