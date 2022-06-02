import axios from "axios";
import {UserType} from "../redux/users-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fae13881-e951-4f04-94b2-31eb83e53019'
    }
})

export const usersAPI= {
    getUsers (currentPage: number, pageSize: number)
{
    return instance.get<getUsersType>(`users?pages=${currentPage}&count=${pageSize}`)
        .then(response => {
                return response.data
            }
        )
}
}



/*export const followUsers = (id:number) => {
    return instance.delete('follow/'+id  )

        .then(response => {
                return response.data
            }
        )
}*/

type getUsersType = {
    items: UserType[],
    totalCount: number,
    error: string
}