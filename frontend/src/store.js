import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

const initialState = {};
const middleware = [thunk];

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
  },
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
