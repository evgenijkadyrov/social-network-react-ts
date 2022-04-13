import React from "react";
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";


export class Users extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    avatar = require('../../common/avatars/user.png')

    render() {
        return <div>
            {
                this.props.usersPage.users.map(ul => <div key={ul.id}>
                    <span>
                        <div>
                            <img src={ul.photos.small !== null ? ul.photos.small : String(this.avatar)}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {ul.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(ul.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    this.props.follow(ul.id)
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
    }
}


