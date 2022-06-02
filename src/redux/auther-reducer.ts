import {ActionsType} from "./store";

const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth:false

}

export type SetUserDataType = {
    type: 'SET_USER_DATA',
    data:{id: number | null,
        login: string | null,
        email: string | null,
        isAuth:boolean}

}
export type InitialStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth:boolean

}

export const autherReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SET_USER_DATA':

            return {...state, ...action.data,isAuth:true}
        default:
            return state
    }
}

export const setUserData = (id:number,login:string,email:string,isAuth:boolean):SetUserDataType => ({type: 'SET_USER_DATA', data:{id,login,email,isAuth} })

