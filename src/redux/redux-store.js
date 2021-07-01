import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import findUsersReducer from "./findUsers-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    ProfilePage: profileReducer,
    dialogsPage: messagesReducer,
    UsersPage: findUsersReducer,
    auth: authReducer,
    appPage: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;