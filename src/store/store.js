import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import userSlice from "./features/user/userSlice";
import blogSlice from "./features/blog/blogSlice";
import cartSlice from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    user: userSlice,
    blog: blogSlice,
  },
});

export default store;
