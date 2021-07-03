import {authAPI} from "../Api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'my-social-network/auth/SET_USER_DATA';

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

export const getUserProfileData = () => async (dispatch) => {
       let response = await authAPI.getMe()
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setUserdata(id,login, email, true))
            }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
     let response = await authAPI.login(email, password, rememberMe)
        if(response.data.resultCode === 0) {
            dispatch(getUserProfileData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages : 'Some error'
                dispatch(stopSubmit('login', {_error: message}));
            }
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
        if(response.data.resultCode === 0) {
                dispatch(setUserdata(null, null, null, false))
            }
}

export default authReducer;