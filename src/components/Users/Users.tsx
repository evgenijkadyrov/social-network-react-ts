import React from "react";

import {UserType} from "../../redux/users-reducer";
import {Pagination} from "../../common/Pagination/Pagination";
import {User} from "./User";

type UsersType = {
    onPageChanged: (p: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UserType>
    followInProgress: number[]

}


export const Users = (props: UsersType) => {
    const {
        onPageChanged,
        currentPage,
        totalUsersCount,
        pageSize,
        users,
        unfollow,
        follow,
        followInProgress
    } = props
    return (
        <div>
            <Pagination onPageChanged={onPageChanged} currentPage={currentPage}
                        totalUsersCount={totalUsersCount} pageSize={pageSize}/>
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






