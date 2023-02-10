import React, {FC, useEffect, useState} from "react";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/users-reducer";
import {User} from "./User";
import { Pagination } from 'antd';
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
import s from './Users.module.css'

export const Users: FC = (props) => {

    const dispatch = useDispatch()
    const search = useLocation().search
    const navigate = useNavigate()
    const filter = useSelector(getFilters)
    let currentPage = useSelector(getCurrentPage)
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

        dispatch(requestUsers(currentPage=1, pageSize, filter))
    }
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }
    return (
        <div className={s.wrapperContainer}>
            <div className={s.container}>

                <div className={s.pagination}>
                    <Pagination defaultCurrent={1} total={totalUsersCount} onChange={onPageChanged }/>
                </div>
                <div className={s.users}>
                    <UsersSearchForm onFilterChanged={onFilterChanged}/>
                </div>
                <h2>Samurai</h2>
                <div className={s.user}>
                    {
                        users.map(ul => <User key={ul.id} user={ul} follow={followUser}
                                              unfollow={unfollowUser}
                                              followInProgress={followInProgress}/>
                        )
                    }
                </div>
            </div>

        </div>
    );
};






