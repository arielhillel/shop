// Action
export const addProduct = (product) => {
  return { type: "ADD_PRODUCT", product: product };
};
export const removeProduct = (product) => {
  return { type: "REMOVE_PRODUCT", product: product };
};

// Reducer
export const reducerCartArr = (state = 0, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { id: action.product, quantity: state + 1 };
    case "REMOVE_PRODUCT":
      state.pop(action.product);
      return state;
    default:
      return state;
  }
};
