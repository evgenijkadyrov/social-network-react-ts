import React, {FC} from "react";
import styles from './Users.module.css'
import avatarIcon from '../../common/avatars/user.png'

import {Link} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";

type UserTypeProps = {
    user: UserType
    follow: (userId: number) => void
    followInProgress: number[]
    unfollow: (userId: number) => void
}


export const User:FC<UserTypeProps> = (props) => {
    const {user, follow, followInProgress, unfollow} = props
    return (
        <div key={user.id}>
        <span>
        <Link to={'/profile/' + user.id}>
        <div>
        <img
            src={user.photos.small !== null ? user.photos.small : String(avatarIcon)}
            className={styles.userPhoto}/>
</div>
</Link>
    <div>
        {user.followed
            ? <button
                disabled={followInProgress.some(id => id === user.id)}
                onClick={() => {

                    unfollow(user.id)

                }}>UnFollow</button>
            : <button
                disabled={followInProgress.some(id => id === user.id)}
                onClick={() => {
                    follow(user.id)

                }}>Follow</button>}

    </div>
</span>
            <span>
                        <span><div>{user.name}</div>
                        <div>{user.status}</div></span>
                        <span><div>{'ul.location.country'}</div>
                        <div>{'ul.location.city'}</div></span>
                    </span>
        </div>
    )
};






