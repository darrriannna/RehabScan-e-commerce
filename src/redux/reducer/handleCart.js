import { ADD_TO_CART, DEL_CART } from "../action/index";

const initialState = {
  products: [],
  services: []
};

const handleCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (action.payload.type === 'service') {
        // Add to services
        return {
          ...state,
          services: [...state.services, action.payload]
        };
      } else {
        // Add to products
        return {
          ...state,
          products: [...state.products, action.payload]
        };
      }
    case DEL_CART:
      if (action.payload.type === 'service') {
        // Remove from services
        return {
          ...state,
          services: state.services.filter(item => item.id !== action.payload.id)
        };
      } else {
        // Remove from products
        return {
          ...state,
          products: state.products.filter(item => item.id !== action.payload.id)
        };
      }
    default:
      return state;
  }
};

export default handleCart;
