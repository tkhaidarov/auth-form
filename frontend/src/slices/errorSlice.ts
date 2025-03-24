import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IErrorState {
  user: any | null;
  token: string | null;
  error: string | null;
}
const initialState: IErrorState = {
  user: null,
  token: null,
  error: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrorCredentials: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    logout: state => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
});

export const { setErrorCredentials, setError } = errorSlice.actions;
export default errorSlice.reducer;
