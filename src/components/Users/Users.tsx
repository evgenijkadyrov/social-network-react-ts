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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?pages=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNum: number) => {
        this.props.setCurrentPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    avatar = require('../../common/avatars/user.png')

       render() {
        let pages = [];
        let numberPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        for (let i = 1; i <= numberPages; i++) {
            pages.push(i)
        }
        //numeration pages
        const pagesToDisplay = 10;
        let startPage = this.props.currentPage
        let visiablePages = pages.slice(startPage-1, startPage + pagesToDisplay)

        return <div>
            <div>

                {visiablePages.map(p => {
                    return <span onClick={() => {
                        this.onPageChanged(p)
                    }} className={this.props.usersPage.currentPage === p ? styles.selected : ''}>{p}</span>
                })}

            </div>
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


