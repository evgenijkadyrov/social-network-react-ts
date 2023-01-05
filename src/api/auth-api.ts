import {instance, ResponseType, ResultCode, ResultCodeForCaptcha} from "./api";

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<AutherDataType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null) {
        return instance.post<ResponseType<{ userId: number }, ResultCode & ResultCodeForCaptcha>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        }).then(res => res.data)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login').then(res => res.data)
    }
}

type AutherDataType = {
    id: number,
    email: string,
    login: string
}