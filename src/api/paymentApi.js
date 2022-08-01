import axios from 'axios';

const paymentApi = {
    createPaymentIntentStripe: (params) => {
        const url = '/api/stripe/create-payment-intent';

        return axios.post(url, null, {
            params,
        });
    },
};

export default paymentApi;
