import {usersAPI} from "../Api/Api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const PRELOADER_TOGGLE = 'PRELOADER-TOGGLE'
const FOLLOWING_TOGGLE = 'FOLLOWING_TOGGLE';

let initialization = {
    users: [],
    pageSize: 5,
    totalUsersCount: 40,
    currentPage: 1,
    isFetching: false,
    followingToggle: []
}

const findUsersReducer = (state = initialization, action) => {
    switch(action.type) {
        case FOLLOW:
            return{
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return  u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case PRELOADER_TOGGLE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_TOGGLE:
            return {
                ...state,
                followingToggle: action.isFetching
                    ? [...state.followingToggle, action.userId]
                    : state.followingToggle.filter(id => id != action.userId)
            }
        default:
            return state;
    }

}

export const follows = (userId) => { return {type: FOLLOW, userId} }
export const unfollow = (userId) => { return {type: UNFOLLOW, userId} }
export const setUsers = (users) => { return {type: SET_USERS, users} }
export const setCurrentPage = (currentPage) => { return {type: SET_CURRENT_PAGE, currentPage} }
export const setTotalUsersCount = (totalUsersCount) => { return  {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} }
export const preloaderToggle = (isFetching) => { return {type: PRELOADER_TOGGLE, isFetching} }
export const progressToggle = (isFetching, userId) => { return {type: FOLLOWING_TOGGLE, isFetching, userId} }

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(preloaderToggle(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(preloaderToggle(false))
        });
    }
}

export const followSuccess = (id) => {
    return (dispatch) => {
        dispatch(progressToggle(true, id))
        usersAPI.getFollow(id)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(follows(id))
                }
                dispatch(progressToggle(false, id))
            })
    }
}

export const unfollowSuccess = (id) => {
    return (dispatch) => {
        dispatch(progressToggle(true, id))
        usersAPI.getUnfollow(id)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(progressToggle(false, id))
            })
    }
}

export default findUsersReducer;