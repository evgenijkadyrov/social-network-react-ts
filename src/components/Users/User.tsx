import React, {FC, useCallback, useEffect} from "react";
import {UserType} from "../../redux/users-reducer";
import {UserFoto} from "./UserFoto";
import {Button} from "antd";
import s from './User.module.css'
import {Link, redirect, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {startDialog} from "../../redux/dialogs-reducer";
type UserTypeProps = {
    user: UserType
    follow: (userId: number) => void
    followInProgress: number[]
    unfollow: (userId: number) => void
}


export const User: FC<UserTypeProps> = (props) => {
    const {user, follow, followInProgress, unfollow} = props
    const dispatch=useDispatch()
const navigate=useNavigate()
        const handleStartDialog=(userId:number)=>{
            dispatch(startDialog(userId))
            navigate(`../dialogs/${userId}`,{replace:true})
        }



    return (
        <div key={user.id} className={s.wrapperContainer}>
            <div className={s.container}>
                <div className={s.userFoto}>
                    <UserFoto user={user}/>
                </div>

                <div className={s.infoUser}>
                    <Link to={'/profile/' + user.id}>
                        <span className={s.name}>{user.name}</span>
                    </Link>

                    <span>{user.status}</span>
                    <span>{user.location?.country}</span>
                    <span>{user.location?.city}</span>
                </div>
                <div className={s.followBtn}>
                    <div>{user.followed
                        ? <Button
                            disabled={followInProgress.some(id => id === user.id)}
                            onClick={() => {

                                unfollow(user.id)

                            }}>UnFollow</Button>
                        : <Button
                            disabled={followInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)

                            }}>Follow</Button>}</div>

                    <div><Button onClick={()=>handleStartDialog(user.id)}>
                        Sent message
                    </Button></div>
                </div>
            </div>

            <hr/>
        </div>
    )
};






