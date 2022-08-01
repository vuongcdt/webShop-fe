import axios from 'axios';
import queryString from 'query-string';
import { BASE_URL_API } from '../../../utils/api';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const wooClient = axios.create({
    baseURL: BASE_URL_API + '/wp-json/wc/v3',
    headers: {
        'content-type': 'application/json',
        Authorization: 'Basic Y2tfYWI0NGZmOThiN2FjOGM2MjliMTA3Mzk5ZWIwYjBjOGMyNmUwNDhjNDpjc18wYmRiZTI2OWM5NjA5OGJmZDY1N2FiZDRlMmQ3NTI2MzJmNDZhYTIw',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

wooClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return {
                data: response.data,
                headers: response.headers,
            };
        }

        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);

export default wooClient;
