import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./likeSlice";
import bascetReducer from "./bascetSlicer"

export const store = configureStore({
  reducer: {
    Like: itemsReducer,
    Bascet: bascetReducer,
  },
});

export default store
