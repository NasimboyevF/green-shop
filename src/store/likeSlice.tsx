import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductQuantity } from "../interface/Product";

interface ItemsState {
  items: Product[];
}

// const localDataLike = (): Product[] => {
//   const savedItems = localStorage.getItem("items");
//   if (savedItems) {
//     return JSON.parse(savedItems);
//   }
//   return [];
// };

export const localDataLike = (teg: string): Product[] | ProductQuantity[] => {
  return JSON.parse(localStorage.getItem(teg) || "[]") || null;
};

export const saveDataLike = (
  teg: string,
  items: Product[] | ProductQuantity[]
): void => {
  localStorage.setItem(teg, JSON.stringify(items));
};

const initialState: ItemsState = {
  items: localDataLike("liked"),
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
      saveDataLike("liked", state.items);
    },
    removeItem: (state, action: PayloadAction<{ _id: string }>) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      saveDataLike("liked", state.items);
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
