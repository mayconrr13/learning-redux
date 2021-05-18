//Combine all reducers into only one application state

import { combineReducers } from "redux";
import cart from './cart/reducer'

export default combineReducers({
  cart,
})