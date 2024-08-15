import { createStore } from 'redux';
import rootReducer from './reducer'; // Import the root reducer
import { loadState, saveState } from '../utils/localStorage'; // Ensure this path is correct

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;


