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
import {useLocation, useNavigate} from "react-router-dom";

export const Users: FC = (props) => {

    const dispatch = useDispatch()
    const search = useLocation().search
    const navigate = useNavigate()

    const filter = useSelector(getFilters)
    const currentPage = useSelector(getCurrentPage)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsers)
    const followInProgress = useSelector(getFollowInProgress)

    useEffect(() => {

        let urlTerm = new URLSearchParams(search).get('term')
        let urlFriend = new URLSearchParams(search).get('friend')
        let urlCurrentPageSelect = Number(new URLSearchParams(search).get('page'))
        let urlFriendConvert = urlFriend === 'null' ? null : urlFriend === 'true'
        let actualPage = currentPage
        if (urlCurrentPageSelect) actualPage = urlCurrentPageSelect
        let actualFilter = filter
        if (!!urlTerm) actualFilter = {...actualFilter, term: urlTerm}
        if (!!urlFriend) actualFilter = {...actualFilter, friend: urlFriendConvert}

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {

        navigate({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })

    }, [filter, currentPage])

    const onPageChanged = (pageNum: number) => {
        dispatch(requestUsers(pageNum, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        debugger
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






