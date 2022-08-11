import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cashR: cashReducer,
  customerR: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());