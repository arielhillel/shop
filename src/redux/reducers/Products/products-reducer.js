// Action
export const LoadProducts = (Products) => {
  return { type: "Load_Products", Products: Products };
};

// Reducer
export const reducerProducts = (state = 0, action) => {
  switch (action.type) {
    case "Load_Products":
      return action.Products;
    default:
      return state;
  }
};
