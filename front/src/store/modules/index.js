import { combineReducers } from 'redux'
import cart from './cart';
import signup from './signup';

const rootReducer = combineReducers({
    cart,
    signup,
});

export default rootReducer;