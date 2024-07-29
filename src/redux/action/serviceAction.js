export const addService = (service) => (dispatch) => {
    dispatch({
      type: "ADD_SERVICE",
      payload: service
    });
    saveCartToLocalStorage();
  };
  
  export const saveCartToLocalStorage = () => {
    return (dispatch, getState) => {
      const cart = getState().handleCart;
      localStorage.setItem("cart", JSON.stringify(cart));
    };
  };
  
  export const loadCartFromLocalStorage = () => {
    return (dispatch) => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        dispatch({
          type: "LOAD_CART",
          payload: cart
        });
      }
    };
  };
  