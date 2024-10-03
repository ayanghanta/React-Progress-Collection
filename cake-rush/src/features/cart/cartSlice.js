import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    increaseItem(state, action) {
      const item = state.items.find((item) => item._id === action.payload);
      item.quantity++;
      item.itemsPrice = item.quantity * item.price;
    },
    decreaseItem(state, action) {
      const item = state.items.find((item) => item._id === action.payload);
      item.quantity--;
      item.itemsPrice = item.quantity * item.price;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const getItems = (store) => store.cart.items;
export const getTotalCakes = (store) =>
  store.cart.items.reduce((acc, item) => (acc = acc + item.quantity), 0);
export const getCartPrice = (store) =>
  store.cart.items.reduce((acc, item) => (acc = acc + item.itemsPrice), 0);

export const { addItem, deleteItem, increaseItem, decreaseItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
