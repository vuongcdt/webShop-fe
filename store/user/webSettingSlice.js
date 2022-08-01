import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

export const webSettingSlice = createSlice({
    name: 'webSettings',
    initialState,
    reducers: {
        saveSetting: (state, action) => {
            return {
                ...action.payload,
            };
        },
        resetSetting: (state, action) => {
            return {
                ...initialState,
            };
        },
    },
});

export const { saveSetting, resetSetting } = webSettingSlice.actions;

export default webSettingSlice.reducer;
