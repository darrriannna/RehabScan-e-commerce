import { combineReducers } from 'redux';
import servicesReducer from './serviceReducer';

const rootReducer = combineReducers({
  services: servicesReducer
});

export default rootReducer;

