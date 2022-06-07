import {ActionsType} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false

}

export type SetUserDataType = {
    type: 'SET_USER_DATA',
    data: {
        id: number | null,
        login: string | null,
        email: string | null,
        isAuth?: boolean
    }

}
export type InitialStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth?: boolean

}

export const autherReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SET_USER_DATA':

            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setUserData = (id: number, login: string, email: string): SetUserDataType => ({
    type: 'SET_USER_DATA',
    data: {id, login, email}
})

//thunk

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        usersAPI.authMe()
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setUserData(id, login, email))

                }
            })
    }
}

