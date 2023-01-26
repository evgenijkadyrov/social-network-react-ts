import React, {FC} from "react";
import {FilterType, UserType} from "../../redux/users-reducer";
import {Pagination} from "../../common/Pagination/Pagination";
import {User} from "./User";
import {UsersSearchForm} from "./SearchForm";

export const Users: FC<UsersType> = (props) => {
    const {
        onPageChanged,
        currentPage,
        totalUsersCount,
        pageSize,
        users,
        unfollow,
        follow,
        followInProgress,onFilterChanged
    } = props
    return (
        <div>
            <Pagination onPageChanged={onPageChanged} currentPage={currentPage}
                        totalUsersCount={totalUsersCount} pageSize={pageSize}
                        pagesToDisplay={10}/>
            <UsersSearchForm  onFilterChanged={onFilterChanged}/>
            <div>
                {
                    users.map(ul => <User key={ul.id} user={ul} follow={follow}
                                          unfollow={unfollow}
                                          followInProgress={followInProgress}/>
                    )
                }
            </div>
        </div>
    );
};

type UsersType = {
    onPageChanged: (p: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UserType>
    followInProgress: number[]
    onFilterChanged:(filter:FilterType)=>void

}






