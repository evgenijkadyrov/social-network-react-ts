import {ResultCode, ResultCodeForCaptcha} from "../api/api";
import {ActionsTypes, AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {getProfile} from "./profilePage-reducer";

const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    name:null as string | null
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
export const actions = {
    setUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean,captchaUrl:null|string) => ({
        type: 'auth/SET_USER_DATA',
        data: {id, login, email, isAuth,captchaUrl}
    } as const),

    getCaptchaUrl: (captchaUrl: string) => ({
        type: 'auth/GET_CAPTCHA_URL',
        data: {captchaUrl}
    } as const),

}

//thunk
export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let res = await authAPI.authMe()
    if (res.resultCode === ResultCode.Success) {
        let {id, login, email} = res.data
        dispatch(actions.setUserData(id, login, email, true,null))
       dispatch(getProfile(id))
    }
}

export const getCaptcha = (): AppThunk => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrl(captchaUrl))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): AppThunk => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCode.Success) {
        dispatch(getAuthUserData())
    } else {
        if (response.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptcha())
        }
    }
    let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
    dispatch(stopSubmit('login', {_error: message}))


}

export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === ResultCode.Success) {
        dispatch(actions.setUserData(null, null, null, false,null))
    }
}

//types

export  type InitialStateType = typeof initialState
export type ActionsType = ActionsTypes<typeof actions>