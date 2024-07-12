import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { productApi } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
