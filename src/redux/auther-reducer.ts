import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setUserData = (id: number, login: string, email: string, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    data: {id, login, email, isAuth}
} as const)

//thunk

export const getAuthUserData = (isAuth: boolean) => {
    return (dispatch: Dispatch) => {
        usersAPI.authMe()
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setUserData(id, login, email, isAuth))

                }
            })
    }
}

