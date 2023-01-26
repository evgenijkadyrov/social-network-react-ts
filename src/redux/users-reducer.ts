import {Dispatch} from "redux";
import {updateObjectInArray} from "../utiles/object-helper";
import {ActionsTypes, AppThunk} from "./redux-store";
import {usersAPI} from "../api/users-api";
import {ResponseType, ResultCode} from "../api/api";

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
const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true,
    followInProgress: [] as Array<number>,
    filter:{
        term:'',
        friend:null as null|boolean
    }
}


export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            }
        case 'users/SET_USERS':
            return {...state, users: action.users}
        case 'users/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'users/SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'users/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case "users/TOOGLE_IN_PROGRESS":
            return {
                ...state,
                followInProgress: action.followInProgress
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        case "users/SET-FILTER":
            return {...state, filter:action.payload}
        default:
            return state
    }
}
//actions
export const actions = {
    followSuccess: (userID: number) => ({
        type: 'users/FOLLOW',
        userID: userID
    } as const),
    unfollowSuccess: (userID: number) => ({
        type: 'users/UNFOLLOW',
        userID: userID
    } as const),
    setUsers: (users: Array<UserType>) => ({
        type: 'users/SET_USERS',
        users
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: 'users/SET_CURRENT_PAGE',
        currentPage
    } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'users/SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const),
    setToogleIsFetching: (isFetching: boolean) => ({
        type: 'users/TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    toogleFollowProgress: (followInProgress: boolean, userId: number) => ({
        type: 'users/TOOGLE_IN_PROGRESS',
        followInProgress,
        userId
    } as const),
    setFilter:(filter:FilterType) => ({
        type:'users/SET-FILTER',
        payload:filter
    }as const)
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsType>, userId: number, apiMethod: (userId: number) => Promise<ResponseType>, actionCreator: (userId: number) => ActionsType) => {
    dispatch(actions.toogleFollowProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode == ResultCode.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toogleFollowProgress(false, userId))
}

//thunks
export const requestUsers = (page: number, pageSize: number,filter:FilterType): AppThunk => {
    return async (dispatch) => {
        dispatch(actions.setToogleIsFetching(true))
        dispatch(actions.setCurrentPage(page))
        dispatch(actions.setFilter(filter))

        let data = await usersAPI.getUsers(page, pageSize,filter)
        dispatch(actions.setToogleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}

export const follow = (userId: number): AppThunk => {
    return async (dispatch) => {

        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)

    }
}
export const unfollow = (userId: number,): AppThunk => {
    return async (dispatch) => {

        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}
//types
export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
export type ActionsType = ActionsTypes<typeof actions>

