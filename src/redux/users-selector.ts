import {AppStateType} from "../redux/redux-store";


export const getUsers=(state:AppStateType)=>{
return state.usersPage
}
export const getPageSize=(state:AppStateType)=>{
    return state.usersPage.pageSize}
export const getTotalUsersCount=(state:AppStateType)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPage=(state:AppStateType)=>{
    return state.usersPage.currentPage
}
export const getIsFetching=(state:AppStateType)=>{
    return state.usersPage.isFetching
}
export const followInProgress=(state:AppStateType)=>{
    return state.usersPage.followInProgress
}
