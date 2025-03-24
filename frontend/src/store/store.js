import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { authAPI } from '../services/authAPI';
import { usersAPI } from '../services/usersAPI';
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authAPI.middleware, usersAPI.middleware),
});
