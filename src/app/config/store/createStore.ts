//redux
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//schema
import { StateSchema } from './stateSchema';
//reducers
import { userReducer } from '@/entities/users/model/slice/userSlice';

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    [jsonPlaceholderAPI.reducerPath]: jsonPlaceholderAPI.reducer,
    user: userReducer
  };

  const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jsonPlaceholderAPI.middleware)
  });

  return store;
};
