import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { authAPI } from '../services/authAPI';
import { usersAPI } from '../services/usersAPI';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authAPI.middleware, usersAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
