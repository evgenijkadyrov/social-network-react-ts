import React from "react";
import styles from './Users.module.css'
import avatarIcon from '../../common/avatars/user.png'

import {getUsers, toogleFollowProgress, UserType} from "../../redux/users-reducer";
import {Link} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

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

    let pages = [];
    let numberPages = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= numberPages; i++) {
        pages.push(i)
    }
    //numeration pages
    const pagesToDisplay = 10;
    let startPage = 1
    let visiablePages = pages.slice(startPage - 1, startPage + pagesToDisplay)
    return (
        <div>
            <div>

                {visiablePages.map(p => {
                    return <span onClick={() => {

                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? styles.selected : ''}>{p}</span>
                })}

            </div>
            {
                props.users.map(ul => <div key={ul.id}>
                    <span>
                        <Link to={'/profile/' + ul.id}>
                            <div>
                            <img src={ul.photos.small !== null ? ul.photos.small : String(avatarIcon)}
                                 className={styles.userPhoto}/>
                        </div>
                        </Link>
                        <div>
                            {ul.followed
                                ? <button disabled={props.followInProgress.some(id => id === ul.id)} onClick={() => {

                                    props.unfollow(ul.id)

                                }}>UnFollow</button>
                                : <button disabled={props.followInProgress.some(id => id === ul.id)} onClick={() => {
                                    props.follow(ul.id)

                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span><div>{ul.name}</div>
                        <div>{ul.status}</div></span>
                        <span><div>{'ul.location.country'}</div>
                        <div>{'ul.location.city'}</div></span>
                    </span>
                </div>)
            }
        </div>
    );
};






