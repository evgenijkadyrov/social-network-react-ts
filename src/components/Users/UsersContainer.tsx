import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

type mapStateToProps={
    usersPage:InitialStateType
}
type mapDispatchToPropsType={
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType=mapStateToProps & mapDispatchToPropsType
const mapStateToProps=(state:AppStateType):mapStateToProps=>{
    return {
        usersPage:state.usersPage
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
        }
    }
}
export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)