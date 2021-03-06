import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type UserType = {
    id: number, photos: PhotosType,
    followed: boolean, name: string,
    status: string, location?: LocationType
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
    isFetching:true,
    followInProgress:[]
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching:boolean,
    followInProgress:number[]
}
export type ActionsType = SetUsersType | UnFollowType | FollowType|SetCurrentPage|SetTotalUsersCount|isFetchingType|toogleFollowProgressType

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
        case "TOOGLE_IN_PROGRESS":
            return {...state,
                followInProgress:action.followInProgress
                ? [...state.followInProgress,action.userId]
                    :state.followInProgress.filter(id=>id!==action.userId)
            }
        default:
            return state
    }
}
//actions
export const followSuccess = (userID: number) => ({type: 'FOLLOW', userID: userID} as const)
export const unfollowSuccess = (userID: number) => ({type: 'UNFOLLOW', userID: userID}as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users}as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage}as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount}as const)
export const setToogleIsFetching=(isFetching:boolean)=>({type:'TOGGLE_IS_FETCHING', isFetching}as const)
export const toogleFollowProgress=(followInProgress:boolean,userId:number)=>({type:'TOOGLE_IN_PROGRESS', followInProgress,userId}as const)



//types
type FollowType=ReturnType<typeof followSuccess>
type UnFollowType = ReturnType<typeof unfollowSuccess>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPage=ReturnType<typeof setCurrentPage>
type SetTotalUsersCount=ReturnType<typeof setTotalUsersCount>
type isFetchingType=ReturnType<typeof setToogleIsFetching>
type toogleFollowProgressType=ReturnType<typeof toogleFollowProgress>

//thunks
export const getUsers=(currentPage:number, pageSize:number)=>{
   return (dispatch:Dispatch)=>{

   dispatch( setToogleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {

            dispatch(setToogleIsFetching(false))
            dispatch(setUsers(data.items))
           dispatch(setTotalUsersCount(data.totalCount))
        })
}}

export const follow=(userId:number )=>{
    return (dispatch:Dispatch)=> {

        dispatch(toogleFollowProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toogleFollowProgress(false, userId))
            })
    }}
export const unfollow=(userId:number, )=>{
    return (dispatch:Dispatch)=> {

        dispatch(toogleFollowProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                   dispatch( unfollowSuccess(userId))
                }
                dispatch(toogleFollowProgress(false, userId))
            })
    }}
