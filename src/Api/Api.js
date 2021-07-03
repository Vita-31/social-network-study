import * as axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fd38946f-6bcb-462b-8254-a9f0954388f0"
    },
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    getUnfollow(id) {
        return instanceAxios.delete(`follow/${id}`)
    },
    getFollow(id) {
        return instanceAxios.post(`follow/${id}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please ProfileAPI object.')
        return ProfileAPI.getProfile(userId)
    }
}

export const ProfileAPI = {
    getProfile(userId) {
        return instanceAxios.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instanceAxios.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instanceAxios.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    getMe() {
        return instanceAxios.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instanceAxios.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instanceAxios.delete(`auth/login`)
    }
}
