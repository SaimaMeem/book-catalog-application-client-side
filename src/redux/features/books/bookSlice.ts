/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface AppState {
    searchTerm: string;
    genre: string[];
    publicationYear: string[];
}
const initialState: AppState = {
    searchTerm: '',
    genre: [],
    publicationYear: [],
};
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        searchBook: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        filterByGenre: (state, action: PayloadAction<string>) => {
            if (state.genre.includes(action.payload)) {
                state.genre = state.genre.filter(
                    (checkedGenres) => checkedGenres !== action.payload
                );
            } else {
                state.genre = [...state.genre, action.payload];
            }
        },
        filterByPublicationYear: (state, action: PayloadAction<string>) => {
            if (state.publicationYear.includes(action.payload)) {
                state.publicationYear = state.publicationYear.filter(
                    (checkedPublicationYears) =>
                        checkedPublicationYears !== action.payload
                );
            } else {
                state.publicationYear = [
                    ...state.publicationYear,
                    action.payload,
                ];
            }
        },
    },
});

export const { searchBook, filterByGenre, filterByPublicationYear } =
    bookSlice.actions;
export default bookSlice.reducer;
