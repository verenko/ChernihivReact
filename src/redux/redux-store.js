import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";


import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import indexReducer from "./index-reducer";
import problemReducer from "./problem-reducer";


let reducers = combineReducers({

    auth: authReducer,
    app: appReducer,
    indexPage: indexReducer,
    problemItem: problemReducer


});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;