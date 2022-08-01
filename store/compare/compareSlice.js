import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const compareAdapter = createEntityAdapter({
   selectId: ({id,objectID}) => objectID || id,
});

export const compareSlice = createSlice({
   name: "compare",
   initialState: compareAdapter.getInitialState(),
   reducers: {
      addProductCompare: (state, { payload }) => {
         compareAdapter.addOne(state, payload);
      },
      removeProductCompare: (state, { payload }) => {
         compareAdapter.removeOne(state, payload);
      },
      removeAllProductCompare: (state, { payload }) => {
         compareAdapter.removeAll(state);
      },
   },
});
export const { addProductCompare, removeProductCompare, removeAllProductCompare } = compareSlice.actions;

export default compareSlice.reducer;
