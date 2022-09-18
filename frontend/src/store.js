import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

import { orderCreateReducer,orderDetailsReducer, orderPayReducer } from "./reducers/orderReducer";

import { userLoginReducer , userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from "./reducers/userReducers";

import { cartReducer } from "./reducers/cartReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

 const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : null;

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")

const initialState = {
  cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
  paymentMethod: paymentMethodFromStorage,
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
  },
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
