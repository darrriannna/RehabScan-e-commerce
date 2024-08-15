const initialState = {
  services: []
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SERVICE':
      const { id } = action.payload;
      const existingService = state.services.find(service => service.id === id);

      if (existingService) {
        return {
          ...state,
          services: state.services.map(service =>
            service.id === id
              ? { ...service, qty: service.qty + 1 }
              : service
          )
        };
      } else {
        return {
          ...state,
          services: [...state.services, { ...action.payload, qty: 1 }]
        };
      }

    case 'REMOVE_SERVICE':
      return {
        ...state,
        services: state.services.filter(service => service.id !== action.payload)
      };

    default:
      return state;
  }
};

export default serviceReducer;

  