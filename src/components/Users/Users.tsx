import React from "react";
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";



export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response=>{

                props.setUsers(response.data.items)
            })

    }
const avatar=require('../../common/avatars/user.png')
    return (
        <div>
            {
                props.usersPage.users.map(ul => <div key={ul.id}>
                    <span>
                        <div>
                            <img src={ul.photos.small!==null? ul.photos.small:String(avatar)} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {ul.followed
                                ? <button onClick={() => {
                                    props.unfollow(ul.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
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
    )
}