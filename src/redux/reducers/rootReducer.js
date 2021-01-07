import productReducer from "./productReducer";
import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";




const rootReducer = combineReducers({
  auth:authReducer,
  isLoading:loadingReducer,
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
});

export default rootReducer;
