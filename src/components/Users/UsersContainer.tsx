import {connect} from "react-redux";
import {
    follow,
    InitialStateType,
    requestUsers,
        unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React, {ComponentType} from "react";
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

const mapStateToProps = (state: AppStateType): MapStateToProps => {
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

const UsersContainer = compose<ComponentType>(connect<MapStateToProps,MapDispatchToPropsType,null,AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        getUsers: requestUsers

    }),
)(UsersAPI)

type MapStateToProps = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: number[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void

    getUsers: (page: number, pageSize: number)=>void
}
export type UsersPropsType = MapStateToProps & MapDispatchToPropsType

export default UsersContainer