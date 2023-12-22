import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerSlice from "../features/customer/customerSlice";
import productSlice from "../features/products/productSlice";
import brandSlice from "../features/brand/brandSlice";
export const store = configureStore(
    {
        reducer:{auth:authReducer,customers:customerSlice,products:productSlice,brands:brandSlice}
    }
);