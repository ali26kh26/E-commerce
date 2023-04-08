import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { price_state } from "../../types/price_state";

// Define a type for the slice state
interface flterState {
  sort: string;
  size_filter: Array<string>;
  availibilty_filter: Array<string>;
  material_filter: Array<string>;
  price: price_state;
}

// Define the initial state using that type
const initialState: flterState = {
  sort: "",
  size_filter: [],
  availibilty_filter: [],
  material_filter: [],
  price: { min: 7, max: 40 },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    size_filter: (state, action: PayloadAction<string>) => {
      if (action.payload === "reset") {
        state.size_filter = initialState.size_filter;
      } else if (state.size_filter.includes(action.payload)) {
        state.size_filter.splice(state.size_filter.indexOf(action.payload), 1);
      } else {
        state.size_filter.push(action.payload);
      }
    },
    availibilty_filter: (state, action: PayloadAction<string>) => {
      if (action.payload === "reset") {
        state.availibilty_filter = initialState.availibilty_filter;
      } else if (state.availibilty_filter.includes(action.payload)) {
        state.availibilty_filter.splice(
          state.availibilty_filter.indexOf(action.payload),
          1
        );
      } else {
        state.availibilty_filter.push(action.payload);
      }
    },
    material_filter: (state, action: PayloadAction<string>) => {
      if (action.payload === "reset") {
        state.material_filter = initialState.material_filter;
      } else if (state.material_filter.includes(action.payload)) {
        state.material_filter.splice(
          state.material_filter.indexOf(action.payload),
          1
        );
      } else {
        state.material_filter.push(action.payload);
      }
    },
    price_filter: (state, action: PayloadAction<price_state>) => {
      const { min, max } = action.payload;
      state.price.min = min;
      state.price.max = max;
    },
  },
});

export const {
  sort,
  size_filter,
  availibilty_filter,
  material_filter,
  price_filter,
} = filterSlice.actions;

export default filterSlice.reducer;
