import axiosClient from './axiosClient';

const authApi = {
    GenerateAuthCookie: (params) => {
        const url = '/api/user/generate_auth_cookie';

        return axiosClient.post(url, null, {
            params,
        });
    },
    LoginWithFb: (params) => {
        const url = '/api/user/fb_login';

        return axiosClient.post(url, null, {
            params,
        });
    },
    LoginWithGoogle: (params) => {
        const url = '/api/user/google_login';

        return axiosClient.post(url, null, {
            params,
        });
    },
    RegisterWithFb: (params) => {
        const url = '/api/user/fb_register';

        return axiosClient.post(url, null, {
            params,
        });
    },
    RegisterWithGoogle: (params) => {
        const url = '/api/user/google_register';

        return axiosClient.post(url, null, {
            params,
        });
    },
};

export default authApi;
