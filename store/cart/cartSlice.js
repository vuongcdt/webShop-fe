import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter({
    selectId: (product) => product.id,
});

const couponInitial = {
    couponCode: null,
    couponValue: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartAdapter.getInitialState({
        coupon: couponInitial,
    }),
    reducers: {
        productCartAdded: cartAdapter.addOne,
        productCartRemove: cartAdapter.removeOne,
        productCartRemoveAll: cartAdapter.removeAll,
        productCartUpdate: cartAdapter.updateOne,
        cartCouponAdded: (state, action) => {
            state.coupon = action.payload;
        },
        cartCouponRemove: (state, action) => {
            state.coupon = couponInitial;
        },
    },
});

export const {
    productCartAdded,
    productCartRemove,
    productCartUpdate,
    productCartRemoveAll,
    cartCouponAdded,
    cartCouponRemove,
} = cartSlice.actions;

export default cartSlice.reducer;
