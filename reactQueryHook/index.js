import { useMutation, useQueries, useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import chatApi from '../src/api/chatApi';
import userApi from '../src/api/userApi';
import wooApi from '../src/api/woocommerce/wooApi';

export const useCustomerInfor = () => {
    const { user } = useSelector((state) => state.auth);

    return useQuery(
        'customerInfor',
        async () => await wooApi.getCustomer(user.id)
    );
};

export const useMyOrders = (params) => {
    const { user } = useSelector((state) => state.auth);
    const paramQuery = params ? params : '';
    return useQuery(
        ['myOrders', { ...paramQuery }],
        async () =>
            await wooApi.getOrders({
                customer: user.id,
                ...params,
            }),
        {
            refetchOnWindowFocus: true,
        }
    );
};

export const userGetOrderToPayment = (params) => {
    const { user } = useSelector((state) => state.auth);
    const paramQuery = params ? params : '';

    return useQuery(
        ['getOrderToPayment', { ...paramQuery }],
        async () =>
            await wooApi.getOrders({
                customer: user.id,
                ...params,
            }),
        {
            enabled: !!params.include && !!user.id,
            select: (data) => data.data,
        }
    );
};

export const useMyOrdersPending = () => {
    const { user } = useSelector((state) => state.auth);
    return useQuery(
        'myOrdersPending',
        async () =>
            await wooApi.getOrders({
                customer: user.id,
                status: 'pending',
            })
    );
};

export const useMyWishList = () => {
    const { share_key } = useSelector((state) => state.auth);
    return useQuery(
        'myWishList',
        async () => await wooApi.getWishListProducts(share_key)
    );
};

export const useUpdateCustomerInfor = () => {
    const queryClient = useQueryClient();
    const { user } = useSelector((state) => state.auth);

    return useMutation(
        async (dataBilling) =>
            await wooApi.updateCustomer(user.id, {
                ...dataBilling,
            }),
        {
            mutationKey: 'updateCustomerInfor',
            onSuccess: (data) => {
                queryClient.invalidateQueries('customerInfor');
            },
        }
    );
};

export const useOrderNote = (orderId) => {
    return useQuery(
        ['orderNote', orderId],
        async () => await wooApi.getOrderNote(orderId),
        {
            enabled: !!orderId,
        }
    );
};

export const useProducts = (params) => {
    return useQuery(
        ['Products', { ...params }],
        async () =>
            await wooApi.getProducts({
                ...params,
            }),
        {
            enabled: !!params,
        }
    );
};

export const useProductVariations = (ids = []) => {
    let listQueries = ids.map((id, index) => {
        return {
            queryKey: ['ProductVariations', id],
            queryFn: async () => await wooApi.getProductVariations(id),
            enabled: !!id,
            select: (data) => ({ ...data, mainProductId: id.productId }),
        };
    });

    return useQueries(listQueries);
};

export const useUserAddressList = () => {
    const { user, cookie } = useSelector((state) => state.auth);
    return useQuery(
        ['userAddressList'],
        async () =>
            await userApi.GetAddressList({
                cookie,
                userId: user.id,
            })
    );
};

export const useUserAddAddress = () => {
    const queryClient = useQueryClient();
    const { user, cookie } = useSelector((state) => state.auth);

    return useMutation(
        async (params) =>
            await userApi.AddAddressList({
                cookie,
                userId: user.id,
                ...params,
            }),
        {
            mutationKey: 'addUserAddress',
            onSuccess: (data) => {
                queryClient.invalidateQueries('userAddressList');
            },
        }
    );
};

export const useUserRemoveAddress = () => {
    const queryClient = useQueryClient();
    const { user, cookie } = useSelector((state) => state.auth);

    return useMutation(
        async (params) =>
            await userApi.RemoveAddressList({
                cookie,
                userId: user.id,
                ...params,
            }),
        {
            mutationKey: 'removeUserAddress',
            onSuccess: (data) => {
                queryClient.invalidateQueries('userAddressList');
            },
        }
    );
};

export const useUserUpdateAddress = () => {
    const queryClient = useQueryClient();
    const { user, cookie } = useSelector((state) => state.auth);

    return useMutation(
        async (params) =>
            await userApi.UpdateAddressList({
                cookie,
                userId: user.id,
                ...params,
            }),
        {
            mutationKey: 'updateUserAddress',
            onSuccess: (data) => {
                queryClient.invalidateQueries('userAddressList');
            },
        }
    );
};

export const useCoupon = (code) => {
    return useQuery(
        ['Coupon', code],
        async () =>
            await wooApi.getCoupon({
                code,
            }),
        {
            select: (data) => (!data.data[0] ? null : data.data[0]),
        }
    );
};

export const usePaymentMethods = () => {
    return useQuery(
        ['PaymentMethods'],
        async () => await wooApi.getPaymentMethods()
    );
};

export const useProductCategories = (params) => {
    return useQuery(
        ['ProductCategories', { ...params }],
        async () =>
            await wooApi.getCategories({
                ...params,
            }),
        {
            enabled: !!params.slug,
            select: (data) => data.data,
        }
    );
};

export const useSalesChat = () => {
    return useQuery(['Sales'], async () => await chatApi.getSales(), {
        select: (data) => data.supporter,
    });
};
