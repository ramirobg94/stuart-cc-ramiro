import { combineReducers } from "redux";

import UI from './UI/reducer';
import Addresses from './Addresses/reducer';

const appReducer = combineReducers({
    UI,
    Addresses
});

export default appReducer;