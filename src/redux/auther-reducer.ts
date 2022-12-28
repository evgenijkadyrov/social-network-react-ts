import {authAPI, securityAPI} from "../api/api";
import {AppDispatch, AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

const initialState = {
    id: null as number|null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export const autherReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'auth/SET_USER_DATA':
        case 'auth/GET_CAPTCHA_URL':
            return {...state, ...action.data}
        default:
            return state
    }
}

export const setUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'auth/SET_USER_DATA',
    data: {id, login, email, isAuth}
} as const)

export const getCaptchaUrl = (captchaUrl: string) => ({
    type: 'auth/GET_CAPTCHA_URL',
    data: {captchaUrl}
} as const)

//thunk
export const getAuthUserData = (): AppThunk => async (dispatch: AppDispatch) => {
    let response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setUserData(id, login, email, true))
    }
}

export const getCaptcha = (): AppThunk => async (dispatch: AppDispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrl(captchaUrl))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): AppThunk => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', {_error: message}))

}

export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

//types
export type SetUserDataType = ReturnType<typeof setUserData>
export type InitialStateType = typeof initialState
type ActionsType = SetUserDataType | ReturnType<typeof getCaptchaUrl>