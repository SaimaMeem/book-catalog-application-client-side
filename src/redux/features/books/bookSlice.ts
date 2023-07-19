import { PayloadAction, createSlice } from '@reduxjs/toolkit';
const initialState = {
    searchTerm: '',
};
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        searchBook: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { searchBook } = bookSlice.actions;
export default bookSlice.reducer;
