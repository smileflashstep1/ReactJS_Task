import { combineReducers } from 'redux';
import FirstListReducer from './FirstListReducer';
import SecondListReducer from './SecondListReducer';
import ThirdListReducer from './ThirdReducer';

const rootReducer = combineReducers({
    FirstListReducer,
    SecondListReducer,
    ThirdListReducer
})

export default rootReducer