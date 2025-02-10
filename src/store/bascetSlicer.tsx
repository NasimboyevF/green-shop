import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductQuantity } from "../interface/Product";
import { localDataLike, saveDataLike } from "./likeSlice";

interface ItemsState {
  items: (Product | ProductQuantity)[];
}

const initialState: ItemsState = {
  items: localDataLike("bascet"),
};

const bascetSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const productWithQuantity: ProductQuantity = {
        ...action.payload,
        quantity: [1, action.payload.discount],
      };
      state.items.push(productWithQuantity);
      saveDataLike("bascet", state.items);
    },
    removeProduct: (state, action: PayloadAction<{ _id: string }>) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      saveDataLike("bascet", state.items);
    },
    plusQuantyty: (state, action: PayloadAction<{ _id: string }>) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (
        index !== -1 &&
        "quantity" in state.items[index] &&
        state.items[index].quantity[0] < state.items[index].quantity[1]
      ) {
        state.items[index].quantity[0] += 1;
      }

      saveDataLike("bascet", state.items);
    },
    minusQuantyty: (state, action: PayloadAction<{ _id: string }>) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (
        index !== -1 &&
        "quantity" in state.items[index] &&
        state.items[index].quantity[0] > 1
      ) {
        state.items[index].quantity[0] -= 1;
      }

      saveDataLike("bascet", state.items);
    },
  },
});

export const { addProduct, removeProduct, plusQuantyty, minusQuantyty } =
  bascetSlice.actions;

export default bascetSlice.reducer;
