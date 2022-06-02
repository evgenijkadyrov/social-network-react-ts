import React from "react";
import styles from './Users.module.css'
import avatarIcon from '../../common/avatars/user.png'

import {UserType} from "../../redux/users-reducer";
import {Link} from "react-router-dom";
import axios from "axios";

type UsersType = {
    onPageChanged: (p: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UserType>
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
                                ? <button onClick={() => {
                                    axios.delete('https://social-network.samuraijs.com/api/1.0/follow/'+ul.id,  {withCredentials: true, headers:{'API-KEY':'fae13881-e951-4f04-94b2-31eb83e53019'}})
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(ul.id)
                                            }
                                        })

                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    axios.post('https://social-network.samuraijs.com/api/1.0/follow/'+ul.id,{},  {withCredentials: true, headers:{'API-KEY':'fae13881-e951-4f04-94b2-31eb83e53019'}})
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(ul.id)
                                            }
                                        })
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






