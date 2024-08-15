export const addService = (service) => ({
  type: 'ADD_SERVICE',
  payload: service
});

export const removeService = (serviceId) => ({
  type: 'REMOVE_SERVICE',
  payload: serviceId
});

// Save and load functions for local storage
export const saveCartToLocalStorage = (cart) => {
  try {
    const serializedState = JSON.stringify(cart);
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

export const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return [];
  }
};

  