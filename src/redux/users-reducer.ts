import {ActionsType} from "./store";

export type UserType = {
    id: number, photos: PhotosType,
    followed: boolean, name: string,
    status: string, location: LocationType
}
export type PhotosType = {
    small: string
    large: string
}
type LocationType = {
    city: string, country: string
}
const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching:false
}
type isFetchingType={
    type:'TOGGLE_IS_FETCHING',
    isFetching:boolean
}
type FollowType = {
    type: 'FOLLOW',
    userID: number
}
type UnFollowType = {
    type: 'UNFOLLOW',
    userID: number
}
type SetUsersType = {
    type: 'SET_USERS',
    users: Array<UserType>
}
type SetCurrentPage={
    type:'SET_CURRENT_PAGE'
    currentPage:number
}
type SetTotalUsersCount={
    type:'SET_TOTAL_USERS_COUNT'
    totalUsersCount:number
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching:boolean
}
export type ActionType = SetUsersType | UnFollowType | FollowType|SetCurrentPage|SetTotalUsersCount|isFetchingType

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
            case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'TOGGLE_IS_FETCHING':
            return {...state,isFetching:action.isFetching}
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID: userID})
export const unfollowAC = (userID: number) => ({type: 'UNFOLLOW', userID: userID})
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users})
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount})
export const setToogleIsFetchingAC=(isFetching:boolean)=>{
    return {type:'TOGGLE_IS_FETCHING', isFetching}
}