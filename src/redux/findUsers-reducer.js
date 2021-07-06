import {usersAPI} from "../Api/Api";
import {updateObjectsArray} from "../Validation/object-helpers";

const FOLLOW = 'my-social-network/findUsers/FOLLOW';
const UNFOLLOW = 'my-social-network/findUsers/UNFOLLOW';
const SET_USERS = 'my-social-network/findUsers/SET-USERS';
const SET_CURRENT_PAGE = 'my-social-network/findUsers/SET-CURRENT-PAGE';
const SET_TOTAL_ITEMS_COUNT = 'my-social-network/findUsers/SET-TOTAL-ITEMS-COUNT';
const PRELOADER_TOGGLE = 'my-social-network/findUsers/PRELOADER-TOGGLE'
const FOLLOWING_TOGGLE = 'my-social-network/findUsers/FOLLOWING_TOGGLE';

let initialization = {
    users: [],
    pageSize: 5,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingToggle: []
}

const findUsersReducer = (state = initialization, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectsArray(state.users, action.userId, "id", {followed: true})
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectsArray(state.users, action.userId, "id", {followed: false})
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
        case SET_TOTAL_ITEMS_COUNT:
            return {
                ...state,
                totalItemsCount: action.count
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

export const follows = (userId) => {
    return {type: FOLLOW, userId}
}
export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const setUsers = (users) => {
    return {type: SET_USERS, users}
}
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalItemsCount = (totalItemsCount) => {
    return {type: SET_TOTAL_ITEMS_COUNT, count: totalItemsCount}
}
export const preloaderToggle = (isFetching) => {
    return {type: PRELOADER_TOGGLE, isFetching}
}
export const progressToggle = (isFetching, userId) => {
    return {type: FOLLOWING_TOGGLE, isFetching, userId}
}

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(preloaderToggle(true))
    dispatch(setCurrentPage(currentPage))
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.data.items))
    dispatch(setTotalItemsCount(response.data.totalCount))
    dispatch(preloaderToggle(false))
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(progressToggle(true, id))
    let response = await apiMethod(id)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(progressToggle(false, id))
}

export const followSuccess = (id) => async (dispatch) => {
    await  followUnfollowFlow(dispatch, id, usersAPI.getFollow.bind(usersAPI), follows)
}

export const unfollowSuccess = (id) => async (dispatch) => {
    await followUnfollowFlow(dispatch, id, usersAPI.getUnfollow.bind(usersAPI), unfollow)
}

export default findUsersReducer;