import { createEntityAdapter, createSlice, current } from "@reduxjs/toolkit";

const recentlyViewedProductsAdaptor = createEntityAdapter();

export const recentlyViewedProductsSlice = createSlice({
   name: "recentlyViewedProducts",
   initialState: recentlyViewedProductsAdaptor.getInitialState(),
   reducers: {
      addRecentlyViewedProducts: (state, { payload }) => {
         recentlyViewedProductsAdaptor.setAll(state, [...Object.values(current(state).entities).slice(-7), payload]);
      },
   },
});

export const { addRecentlyViewedProducts } = recentlyViewedProductsSlice.actions;

export default recentlyViewedProductsSlice.reducer;
