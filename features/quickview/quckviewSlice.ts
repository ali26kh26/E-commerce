import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import product from "../../types/product";

// Define a type for the slice state
interface quickviewtState {
  show: boolean;
  product: product | null;
}

// Define the initial state using that type
const initialState: quickviewtState = {
  show: false,
  product: null,
};

export const quickviewSlice = createSlice({
  name: "quickview",
  initialState,
  reducers: {
    quickview_show: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    quickview_product: (state, action: PayloadAction<product>) => {
      state.product = action.payload;
    },
  },
});

export const { quickview_show, quickview_product } = quickviewSlice.actions;

export default quickviewSlice.reducer;
