import {connect} from "react-redux";
import {
    follow,
    InitialStateType,
    requistUsers,
    setCurrentPage,
    toogleFollowProgress,
    unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {compose} from "redux";
import {
    followInProgress,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selector";

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
    getUsers: any
}
export type UsersPropsType = mapStateToProps & mapDispatchToPropsType


// const mapStateToProps = (state: AppStateType): mapStateToProps => {
//     return {
//         usersPage: state.usersPage,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followInProgress: state.usersPage.followInProgress
//     }
// }
const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: followInProgress(state)
    }
}

export class UsersAPI extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNum: number) => {
        this.props.getUsers(pageNum, this.props.pageSize)
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


export const UsersContainer = compose<React.ComponentType>(connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toogleFollowProgress,
        getUsers: requistUsers

    }),
)(UsersAPI)
