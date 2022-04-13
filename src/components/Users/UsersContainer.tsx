import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

type mapStateToProps={
    usersPage:InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage:number
}
type mapDispatchToPropsType={
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
}
export type UsersPropsType=mapStateToProps & mapDispatchToPropsType
const mapStateToProps=(state:AppStateType):mapStateToProps=>{
    return {
        usersPage:state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userID:number)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users:Array<UserType>)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
    },
        setTotalUsersCount:(totalUsersCount:number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
    }
    }
}
export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)