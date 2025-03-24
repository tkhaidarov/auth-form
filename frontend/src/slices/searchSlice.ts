import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchEmail: string;
}

const initialState: SearchState = {
  searchEmail: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchEmail: (state, action: PayloadAction<string>) => {
      console.log('Search Query Updated:', action.payload);
      state.searchEmail = action.payload;
    },
  },
});

export const { setSearchEmail } = searchSlice.actions;
export default searchSlice.reducer;
