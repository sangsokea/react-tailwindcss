import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  items: [],
  total: 0,
};

// create slice that contains the reducer and action
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // check product is already in cart
      const existItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // if exist, update quantity
      if (existItem) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // if not exist, add new item
        state.items.push(action.payload);
        state.total += 1;
      }
    },
    increaseQuantity(state, action) {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decreaseQuantity(state, action) {
      // check if quantity is 1, remove item
      state.items.map((item) => {
        if (item.id === action.payload.id && item.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
          state.total -= 1;
        } else if (item.id === action.payload.id && item.quantity > 1) {
          state.items = state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      });
    },
    deleteAll(state) {
      state.items = [];
      state.total = 0;
    }
  },
});

// export action of slice
export const { add, increaseQuantity, decreaseQuantity, deleteAll } = cartSlice.actions;

export default cartSlice.reducer;
