import * as actionTypes from "./products-types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.addToCart,
  };
};
