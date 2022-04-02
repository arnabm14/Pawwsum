import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import recommendationReducer from "./recommendations/recommendationReducer";
import cartReducer from "./cart/cartReducer";
import categoryReducer from "./categories/categoryReducer";
import bannerReducer from "./banners/bannerReducer";

const rootReducer = combineReducers({
  products: productReducer,
  recommendations: recommendationReducer,
  categories: categoryReducer,
  banners: bannerReducer,
  cart: cartReducer,
});

export default rootReducer;
