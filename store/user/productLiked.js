import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const productsAdapter = createEntityAdapter({
    selectId: (product) => product.id,
});

export const productLikedSlice = createSlice({
    name: 'productLiked',
    initialState: productsAdapter.getInitialState(),
    reducers: {
        productAdded: productsAdapter.addOne,
        productRemove: productsAdapter.removeOne,
    },
});

export const { productAdded, productRemove } = productLikedSlice.actions;

export default productLikedSlice.reducer;
