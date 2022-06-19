import {authAPI} from "../api/api";
import {AppDispatch, AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false

}

export type SetUserDataType = ReturnType<typeof setUserData>
export type InitialStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}
type ActionsType = SetUserDataType
export const autherReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, ...action.data}
        default:
            return state
    }
}

export const setUserData = (id: number|null, login: string|null, email: string|null, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    data: {id, login, email, isAuth}
} as const)

//thunk

export const getAuthUserData = ():AppThunk => {
    return (dispatch:AppDispatch) => {
        authAPI.authMe()
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setUserData(id, login, email, true))

                }
            })
    }
}
export const login=(email:string,password:string,rememberMe:boolean):AppThunk=>(dispatch)=>{
    authAPI.login(email,password,rememberMe)
        .then(response=>{
            if (response.data.resultCode===0){
                dispatch(getAuthUserData())
            } else {

                let message=response.data.messages.length>0?response.data.messages[0]:'Some error'
                dispatch(stopSubmit('login',{_error:message}))
            }
        })
}
export const logout=():AppThunk=>(dispatch)=>{
    authAPI.logout()
        .then(response=>{
            if(response.data.resultCode===0){
                dispatch(setUserData(null,null,null,false))
            }
        })
}

