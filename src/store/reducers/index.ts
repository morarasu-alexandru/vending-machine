import { combineReducers } from 'redux';
import userReducer from './userReducer';
import vendingMachineReducer from './vendingMachineReducer';

const rootReducer = combineReducers({
  userStore: userReducer,
  vendingMachineStore: vendingMachineReducer
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
