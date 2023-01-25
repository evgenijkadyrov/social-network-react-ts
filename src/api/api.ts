import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fae13881-e951-4f04-94b2-31eb83e53019'
    }
})

export type getItemsType<T> = {
    items: T,
    totalCount: number,
    error: string
}
export type ResponseType<D={}, RC=ResultCode> = {
    data: D
    resultCode: RC
    messages: Array<string>
}

export enum ResultCode {
    Success = 0,
    Error = 1,

}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
