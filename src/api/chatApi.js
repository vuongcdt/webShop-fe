import axiosClient from './axiosClient';

const chatApi = {
    getSales: () => {
        const url = '/api/chat_support/get_supporters/';

        return axiosClient.get(url);
    },
};

export default chatApi;
