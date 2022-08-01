import { createSlice } from '@reduxjs/toolkit';
import { removeCookies } from 'cookies-next';

const initialState = {
    cookie: null,
    cookie_expiration: null,
    cookie_name: null,
    user: {
        id: null,
        username: null,
        nicename: null,
        email: null,
        url: null,
        registered: null,
        displayname: null,
        firstname: null,
        lastname: null,
        nickname: null,
        description: null,
        capabilities: null,
        avatar: null,
    },
    wishlist_key: null,
    login_method: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateAvatar: (state, action) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    avatar: action.payload,
                },
            };
        },
        loginSuccess: (state, action) => {
            return {
                ...action.payload,
            };
        },
        logOut: (state, action) => {
            removeCookies('wordpress_login')
            return {
                ...initialState,
            };
        },
    },
});

export const { loginSuccess, logOut, updateAvatar } = authSlice.actions;

export default authSlice.reducer;
