import { reducerCartArr } from "./reducerCartArr";
import { reducerProducts } from "./reducerProducts";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  products: reducerProducts,
  cartArr: reducerCartArr,
});

export default allReducers;
