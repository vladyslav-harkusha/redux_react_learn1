import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cashR: cashReducer,
  customersR: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));