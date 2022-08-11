import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cashR: cashReducer,
  customersR: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());