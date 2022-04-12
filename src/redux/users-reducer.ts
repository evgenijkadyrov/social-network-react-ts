import {ActionsType} from "./store";

export type UserType={
    id:number, photos:PhotosType,
    followed:boolean, name:string,
    status: string, location:LocationType
}
export type PhotosType={
    small:string
    large:string
}
type LocationType={
    city:string, country:string
}
const initialState:InitialStateType = {
    users: []
}
type FollowType={
    type:'FOLLOW',
    userID:number
}
type UnFollowType={
    type:'UNFOLLOW',
    userID:number
}
type SetUsersType={
    type:'SET_USERS',
    users:any
}
export type InitialStateType = {
    users:Array<UserType> }
export type ActionType=SetUsersType| UnFollowType| FollowType

export const usersReducer = (state: InitialStateType = initialState, action:ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)
            }
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users ]}
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID: userID})
export const unfollowAC = (userID: number) => ({type: 'UNFOLLOW', userID: userID})
export const setUsersAC = (users:Array<UserType> ) => ({type: 'SET_USERS', users})