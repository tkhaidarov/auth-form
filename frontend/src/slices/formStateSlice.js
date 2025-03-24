import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    name: '',
    email: '',
    password: '',
};
const formStateSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        resetFormState: () => initialState,
    },
});
export const { resetFormState } = formStateSlice.actions;
export default formStateSlice.reducer;
