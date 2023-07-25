/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface AppState {
    email: string;
    accessToken: string;
}
const initialState: AppState = {
    email: '',
    accessToken: '',
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserCredential: (state, action: PayloadAction<AppState>) => {
            state.email = action?.payload?.email;
            state.accessToken = action?.payload?.accessToken;
        },
        removeUserCredential: (state) => {
            state.email = '';
            state.accessToken = '';
        },
    },
});

export const { setUserCredential, removeUserCredential } = userSlice.actions;
export default userSlice.reducer;
