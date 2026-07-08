import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutation the state here 
      state.item.push(action.payload);
    },
    removeItem: (state) => {
      state.item.pop();
    },
    clearItem: (state) => {
      state.item.length = 0;
    },
  },
});

export const { addItem, removeItem, clearStore } = cartSlice.actions;

export default cartSlice.reducer;
