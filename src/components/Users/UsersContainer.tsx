import {connect} from "react-redux";
import {
    follow,
    followSuccess,
    getUsers,
    InitialStateType,
    setCurrentPage,
    setUsers,
    toogleFollowProgress, unfollow,
    unfollowSuccess,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

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

    setCurrentPage: (currentPage: number) => void
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

                   followInProgress={this.props.followInProgress}

            /></>
    }
}


export const UsersContainer =compose<React.ComponentType>(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toogleFollowProgress,
    getUsers

}),withAuthRedirect)(UsersAPI)
