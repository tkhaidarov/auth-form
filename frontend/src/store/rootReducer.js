import { combineReducers } from '@reduxjs/toolkit';
import searchSlice from '../slices/searchSlice';
import authSlice from '../slices/authSlice';
import { authAPI } from '../services/authAPI';
import { usersAPI } from '../services/usersAPI';
import errorSlice from '../slices/errorSlice';
import formStateSlice from '../slices/formStateSlice';
const rootReducer = combineReducers({
    search: searchSlice,
    auth: authSlice,
    [authAPI.reducerPath]: authAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    error: errorSlice,
    form: formStateSlice,
});
export default rootReducer;
