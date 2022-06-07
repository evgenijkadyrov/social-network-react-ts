import {connect} from "react-redux";
import {
    follow, getUsers,
    InitialStateType,
    setCurrentPage,
    setToogleIsFetching,
    setTotalUsersCount,
    setUsers, toogleFollowProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

type mapStateToProps = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: number[]
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setToogleIsFetching: (isFetching: boolean) => void
    toogleFollowProgress: any
    getUsers:any
}
export type UsersPropsType = mapStateToProps & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setToogleIsFetching: (isFetching: boolean) => {
            dispatch(setToogleIsFetchingAC(isFetching))
        }

    }
}*/

export class UsersAPI extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
       /* this.props.setToogleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {

                this.props.setToogleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })*/
    }

    onPageChanged = (pageNum: number) => {
        this.props.getUsers(pageNum, this.props.pageSize)
       /* this.props.setToogleIsFetching(true)
        this.props.setCurrentPage(pageNum)
        usersAPI.getUsers(pageNum, this.props.pageSize)

            .then(data => {

                this.props.setToogleIsFetching(false)
                this.props.setUsers(data.items)
            })*/
    }


    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.usersPage.users}
                   toogleFollowProgress={this.props.toogleFollowProgress }
                   followInProgress={this.props.followInProgress}

            /></>
    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToogleIsFetching, toogleFollowProgress,
    getUsers

})(UsersAPI)