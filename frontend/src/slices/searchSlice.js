import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    searchEmail: '',
};
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchEmail: (state, action) => {
            console.log('Search Query Updated:', action.payload);
            state.searchEmail = action.payload;
        },
    },
});
export const { setSearchEmail } = searchSlice.actions;
export default searchSlice.reducer;
