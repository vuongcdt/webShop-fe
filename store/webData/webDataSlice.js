import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    footer: {
        phone: null,
        address: null,
        email: null,
        coppyright: null,
        category: null,
    },
};

export const webDataSlice = createSlice({
    name: 'webData',
    initialState,
    reducers: {
        setWebData: (state, action) => {
            return {
                ...action.payload,
            };
        },
    },
});

export const { setWebData } = webDataSlice.actions;

export default webDataSlice.reducer;
