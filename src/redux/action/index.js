export const ADD_TO_CART = "ADD_TO_CART";
export const DEL_CART = "DEL_CART";

export const addCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const delCart = (item) => {
  return {
    type: DEL_CART,
    payload: item
  };
};
