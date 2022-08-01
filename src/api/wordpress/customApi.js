import axiosClient from '../axiosClient';

const customApi = {
    GetProductCategories: (params) => {
        const url = '/wp-json/wp/v2/product_cat';

        return axiosClient.get(url, {
            params,
        });
    },
    GetHomeData: () => {
        const url = 'wp-json/acf/v3/options/options';

        return axiosClient.get(url);
    },
};

export default customApi;
