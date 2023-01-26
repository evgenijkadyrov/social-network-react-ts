import {connect} from "react-redux";
import {
    FilterType,
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
    getFilters,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selector";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: followInProgress(state),
        filter: getFilters(state)
    }
}

export class UsersAPI extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize, {term:'',friend: null})

    }

    onPageChanged = (pageNum: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(pageNum, pageSize, filter)
    }
    onFilterChanged = (filter: FilterType) => {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
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
                   onFilterChanged={this.onFilterChanged}
                   followInProgress={this.props.followInProgress}

            /></>
    }
}

const UsersContainer = compose<ComponentType>(connect<MapStateToPropsType, MapDispatchToPropsType, null, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        getUsers: requestUsers,


    }),
)(UsersAPI)

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: number[]
    filter: FilterType
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (page: number, pageSize: number, filter: FilterType) => void

}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export default UsersContainer