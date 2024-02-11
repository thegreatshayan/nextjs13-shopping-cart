import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";

import cartSliceReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});
