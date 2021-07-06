export const getUsers = (state) => {
    return state.UsersPage.users
}

export const getPageSize = (state) => {
    return state.UsersPage.pageSize
}

export const getTotalItemsCount = (state) => {
    return state.UsersPage.totalItemsCount
}

export const getCurrentPage = (state) => {
    return state.UsersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}

export const getFollowingToggle = (state) => {
    return state.UsersPage.followingToggle
}

export const getIsAuth = (state) => {
    return state.auth.isAuth
}