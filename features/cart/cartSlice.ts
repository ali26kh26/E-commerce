import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import product from "../../types/product";
import cart_product from "../../types/cart_product";

// Define a type for the slice state
interface CartState {
  total_items: number;
  total_price: number;
  items: Array<cart_product>;
  show: boolean;
}
interface incrementByMountType {
  product: product;
  quantity: number;
}
// Define the initial state using that type
const initialState: CartState = {
  total_items: 0,
  total_price: 0,
  items: [],
  show: false,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<incrementByMountType>) => {
      const { product, quantity } = action.payload;
      state.total_items += quantity;
      state.total_price += product.price * quantity;
      const index = state.items.findIndex((item) => item.name === product.name);
      if (index >= 0) {
        state.items[index].quantity += quantity;
      } else {
        state.items = [...state.items, { ...product, quantity: quantity }];
      }
    },
    decrement: (state, action: PayloadAction<product>) => {
      state.total_items -= 1;
      state.total_price -= action.payload.price;
      const index = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (index >= 0) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      } else {
        return state;
      }
    },
    delete_one: (state, action: PayloadAction<cart_product>) => {
      state.total_items -= action.payload.quantity;
      state.total_price -= action.payload.price * action.payload.quantity;
      const index = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      state.items.splice(index, 1);
    },
    show: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
  },
});

export const { increment, decrement, delete_one, show } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.cart.total;

export default cartSlice.reducer;
