import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import appReducer from './appReducer';
import userReducer from './userReducer';

export default combineReducers({
    app: appReducer,
    todo: todoReducer,
    user: userReducer,
});
