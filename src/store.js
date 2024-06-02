import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./BookSlice"
import authReducer from "./authSlice"
import reportReducer from "./reoprtSlice"

export const store=configureStore({
    reducer:{bookReducer,authReducer,reportReducer},

})