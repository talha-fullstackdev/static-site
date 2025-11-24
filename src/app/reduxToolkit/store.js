import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";
import counterReducer from "./CounterSlice"
const store = configureStore({
       reducer:{
              reducer,
              counterReducer
       }
})
export default store