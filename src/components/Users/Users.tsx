import React, {FC, useEffect} from "react";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/users-reducer";
import {Pagination} from "../../common/Pagination/Pagination";
import {User} from "./User";
import {UsersSearchForm} from "./SearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFilters,
    getFollowInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selector";

export const Users: FC = (props) => {

    const dispatch = useDispatch()
    const filter = useSelector(getFilters)
    const currentPage = useSelector(getCurrentPage)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsers)
    const followInProgress = useSelector(getFollowInProgress)

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, {term: '', friend: null}))
    }, [])
    const onPageChanged = (pageNum: number) => {
        dispatch(requestUsers(pageNum, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }
    return (
        <div>
            <Pagination onPageChanged={onPageChanged} currentPage={currentPage}
                        totalUsersCount={totalUsersCount} pageSize={pageSize}
                        pagesToDisplay={10}/>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <div>
                {
                    users.map(ul => <User key={ul.id} user={ul} follow={followUser}
                                          unfollow={unfollowUser}
                                          followInProgress={followInProgress}/>
                    )
                }
            </div>
        </div>
    );
};






