import wooClient from './wooClient';

const wooApi = {
    getOrders: (params) => {
        const url = '/orders';

        return wooClient.get(url, {
            params,
        });
    },
    getOrderNote: (orderId) => {
        const url = '/orders/' + orderId + '/notes';

        return wooClient.get(url);
    },
    getCustomer: (userID) => {
        const url = '/customers/' + userID;

        return wooClient.get(url);
    },
    getWishList: (userID) => {
        const url = '/wishlist/get_by_user/' + userID;

        return wooClient.get(url);
    },
    getWishListProducts: (shareKey) => {
        const url = '/wishlist/' + shareKey + '/get_products';

        return wooClient.get(url);
    },
    addProductWishlist: (shareKey, params) => {
        const url = '/wishlist/' + shareKey + '/add_product/';

        return wooClient.post(url, null, params);
    },
    removeProductWishlist: (productId) => {
        const url = 'wishlist/remove_product/' + productId;

        return wooClient.get(url);
    },
    updateCustomer: (userID, data) => {
        const url = '/customers/' + userID;

        return wooClient.put(url, data);
    },
    getProducts: (params) => {
        const url = '/products';

        return wooClient.get(url, {
            params,
        });
    },
    getProductVariations: (ids) => {
        const url =
            '/products/' +
            ids.productId +
            '/variations/' +
            ids.productVariationId;

        return wooClient.get(url);
    },
    getCategories: (params) => {
        const url = '/products/categories';

        return wooClient.get(url, {
            params,
        });
    },
    getCoupon: (params) => {
        const url = '/coupons';
        return wooClient.get(url, { params });
    },
    getPaymentMethods: () => {
        const url = '/payment_gateways';
        return wooClient.get(url);
    },
    createOrder: (params) => {
        const url = '/orders';
        return wooClient.post(url, params);
    },
    updateOrder: (orderId, params) => {
        const url = '/orders/' + orderId;

        return wooClient.post(url, null, { params });
    },
    createOrderNote: (orderId, params) => {
        const url = '/orders/' + orderId + '/notes';
        return wooClient.post(url, null, { params });
    },
    getOrder: (orderId) => {
        const url = '/orders/' + orderId;
        return wooClient.get(url);
    },
    
};

export default wooApi;
