import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utiles/object-helper";

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
    isFetching: true,
    followInProgress: []
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followInProgress: number[]
}
export type ActionsType =
    SetUsersType
    | UnFollowType
    | FollowType
    | SetCurrentPage
    | SetTotalUsersCount
    | isFetchingType
    | toogleFollowProgressType

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userID,'id',{followed:true})
            }

        case 'users/UNFOLLOW':
            return {
                ...state,
                users:  updateObjectInArray(state.users,action.userID,'id',{followed:false})
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
        default:
            return state
    }
}
//actions
export const followSuccess = (userID: number) => ({
    type: 'users/FOLLOW',
    userID: userID
} as const)
export const unfollowSuccess = (userID: number) => ({
    type: 'users/UNFOLLOW',
    userID: userID
} as const)
export const setUsers = (users: Array<UserType>) => ({
    type: 'users/SET_USERS',
    users
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: 'users/SET_CURRENT_PAGE',
    currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'users/SET_TOTAL_USERS_COUNT',
    totalUsersCount
} as const)
export const setToogleIsFetching = (isFetching: boolean) => ({
    type: 'users/TOGGLE_IS_FETCHING',
    isFetching
} as const)
export const toogleFollowProgress = (followInProgress: boolean, userId: number) => ({
    type: 'users/TOOGLE_IN_PROGRESS',
    followInProgress,
    userId
} as const)


//types
type FollowType = ReturnType<typeof followSuccess>
type UnFollowType = ReturnType<typeof unfollowSuccess>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPage = ReturnType<typeof setCurrentPage>
type SetTotalUsersCount = ReturnType<typeof setTotalUsersCount>
type isFetchingType = ReturnType<typeof setToogleIsFetching>
type toogleFollowProgressType = ReturnType<typeof toogleFollowProgress>

//thunks
export const requistUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setToogleIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(setToogleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
export const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toogleFollowProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toogleFollowProgress(false, userId))
}
export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {

        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)

    }
}
export const unfollow = (userId: number,) => {
    return async (dispatch: Dispatch) => {

        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}
