import { reducerCartArr } from "./reducers/reducerCartArr";
import { reducerProducts } from "./reducers/Products/products-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  products: reducerProducts,
  cartArr: reducerCartArr,
});

export default allReducers;
