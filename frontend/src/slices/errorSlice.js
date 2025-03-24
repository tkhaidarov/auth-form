import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: null,
    token: null,
    error: null,
};
const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErrorCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        },
        setError: (state, action) => {
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
