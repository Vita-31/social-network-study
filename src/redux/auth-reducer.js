import {authAPI, usersAPI} from "../Api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialization = {
    id: null,
    login: null,
    email: null,
    isAuth: false

}

const authReducer = (state = initialization, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setUserdata = (id,login, email, isAuth) => {return{type: SET_USER_DATA, data: {id, login, email, isAuth}}}

export const getUserProfileData = () => {
    return (dispatch) => {
        authAPI.getMe()
            .then(data => {
            if(data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setUserdata(id,login, email, true))
            }
        })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(getUserProfileData());
            } else {
                let message = data.messages.length > 0 ? data.messages : 'Some error'
                dispatch(stopSubmit('login', {_error: message}));
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserdata(null, null, null, false))
            }
        })
}

export default authReducer;