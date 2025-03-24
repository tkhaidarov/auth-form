import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from '../types/types';

const initialState: IAuthState = {
  user: null,
  token: localStorage.getItem('token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IAuthState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token);
      }
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
