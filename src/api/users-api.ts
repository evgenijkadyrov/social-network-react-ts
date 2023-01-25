import {getItemsType, instance, ResponseType} from "./api";
import {UserType} from "../redux/users-reducer";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getItemsType<Array<UserType>>>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>

    },

}