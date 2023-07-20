import { PayloadAction, createSlice } from '@reduxjs/toolkit';
const initialState = {
    searchTerm: '',
    genre: '',
};
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        searchBook: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        filterByGenre: (state, action: PayloadAction<string>) => {
            state.genre = action.payload;
        },
    },
});

export const { searchBook, filterByGenre } = bookSlice.actions;
export default bookSlice.reducer;
