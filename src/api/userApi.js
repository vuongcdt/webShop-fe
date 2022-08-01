import axiosClient from './axiosClient';

const userApi = {
    SendCodeResetPass: (params) => {
        const url = '/wp-json/bdpwr/v1/reset-password';

        return axiosClient.post(url, null, {
            params,
        });
    },
    ValidateCodeReset: (params) => {
        const url = '/wp-json/bdpwr/v1/validate-code';

        return axiosClient.post(url, null, {
            params,
        });
    },
    ResetPassword: (params) => {
        const url = '/wp-json/bdpwr/v1/set-password';

        return axiosClient.post(url, null, {
            params,
        });
    },
    ChangePassword: (params) => {
        const url = '/api/user/change_password';

        return axiosClient.post(url, null, {
            params,
        });
    },
    GetAddressList: (params) => {
        const url = '/api/user/get_user_address_list';

        return axiosClient.get(url, {
            params,
        });
    },
    UpdateAddressList: (params) => {
        const url = '/api/user/update_user_address_list';

        return axiosClient.post(url, null, {
            params,
        });
    },
    AddAddressList: (params) => {
        const url = '/api/user/add_user_address_list';

        return axiosClient.post(url, null, {
            params,
        });
    },
    RemoveAddressList: (params) => {
        const url = '/api/user/remove_user_address_list';

        return axiosClient.post(url, null, {
            params,
        });
    },
    UpdateAvatar: (params) => {
        const url = '/api/user/update_user_avatar';

        return axiosClient.post(url, null, {
            params,
        });
    },
};

export default userApi;
