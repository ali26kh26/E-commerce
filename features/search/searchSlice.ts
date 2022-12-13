import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface WishlistState {
  show: boolean;
}

// Define the initial state using that type
const initialState: WishlistState = {
  show: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search_show: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
  },
});

export const { search_show } = searchSlice.actions;

export default searchSlice.reducer;
