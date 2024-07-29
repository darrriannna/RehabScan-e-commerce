const initialState = {
  products: [],
  services: []
};

const handleCart = (state = initialState, action) => {
  console.log("Reducer action:", action);
  switch (action.type) {
    case "ADDITEM":
      const item = action.payload;
      console.log("Handling ADDITEM for:", item);
      if (item.type === 'service') {
        const serviceIndex = state.services.findIndex(serv => serv.id === item.id);
        if (serviceIndex !== -1) {
          state.services[serviceIndex].qty += 1;
        } else {
          state.services.push({ ...item, qty: 1 });
        }
      } else {
        const productIndex = state.products.findIndex(prod => prod.id === item.id);
        if (productIndex !== -1) {
          state.products[productIndex].qty += 1;
        } else {
          state.products.push({ ...item, qty: 1 });
        }
      }
      return { ...state };

    case "DELITEM":
      const delItem = action.payload;
      console.log("Handling DELITEM for:", delItem);
      if (delItem.type === 'service') {
        const serviceIndex = state.services.findIndex(serv => serv.id === delItem.id);
        if (serviceIndex !== -1) {
          state.services[serviceIndex].qty -= 1;
          if (state.services[serviceIndex].qty === 0) {
            state.services.splice(serviceIndex, 1);
          }
        }
      } else {
        const productIndex = state.products.findIndex(prod => prod.id === delItem.id);
        if (productIndex !== -1) {
          state.products[productIndex].qty -= 1;
          if (state.products[productIndex].qty === 0) {
            state.products.splice(productIndex, 1);
          }
        }
      }
      return { ...state };

    default:
      return state;
  }
};

export default handleCart;


