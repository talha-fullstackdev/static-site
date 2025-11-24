import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCount: (state) => {
      state.value += 1;
    },
    decrementCount: (state) => {
      state.value > 0 ? (state.value -= 1) : state.value;
    },
  },
});
export const { incrementCount, decrementCount } = counterSlice.actions;
export default counterSlice.reducer;
