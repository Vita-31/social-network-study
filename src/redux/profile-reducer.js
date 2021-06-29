import {ProfileAPI, usersAPI} from "../Api/Api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialization = {
    post: [
        {id: 1, post: 'Hi, how are you?', likesCount: 2},
        {id: 2, post: 'Hi, old are you?', likesCount: 0},
        {id: 3, post: 'Hi, how are you?', likesCount: 5},
        {id: 4, post: 'Hi, old are you?', likesCount: 3},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialization, action) => {
    switch (action.type) {
        case ADD_POST:
            return{
                ...state,
                post:[...state.post, {id: 6, post: action.newPostBody, likesCount: 0}]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return{
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreation = (newPostBody) => { return {type: ADD_POST, newPostBody} }
export const setUserProfile = (profile) => { return {type: SET_USER_PROFILE, profile} }
export const setStatus = (status) => {return {type: SET_STATUS, status}}

export const setProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            });
    }
}

export const getStatus = (userId) => {
    return(dispatch) => {
        ProfileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;