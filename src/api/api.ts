import axios from "axios";
import {UserType} from "../redux/users-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fae13881-e951-4f04-94b2-31eb83e53019'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)

    },
  /*  getProfile(userId: number) {
        console.warn('Obsolete method. Please use profileAPI')
        return profileAPI.getProfile(userId)
    },*/
    authMe() {
        return instance.get(`auth/me`)
    }
}
export const profileAPI = {

    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {

        return instance.get(`profile/status/${userId}`)
    },
    updateStatus( status: string) {
        return instance.put(`profile/status`, {status})
    }
}


type getUsersType = {
    items: UserType[],
    totalCount: number,
    error: string
}