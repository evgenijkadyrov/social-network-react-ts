import React, {FC, useCallback, useEffect, useState} from 'react';
import s from './Message.module.css'
import noImageAvatar from "../../../common/avatars/user.png";
import {PlusOutlined, MailOutlined} from '@ant-design/icons';

import {DeleteOutlined } from '@ant-design/icons';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    deleteUserMessage,
    DialogType,
    MessageType,
    requestMessages
} from "../../../redux/dialogs-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {getProfile} from "../../../redux/profilePage-reducer";
import {AddMessageForm} from "./AddMessageForm";
import {Button} from "antd";

export type MessagePropsType = {
message:MessageType
    dialogs:DialogType[]
}
export const Message: FC<MessagePropsType> = ({message,dialogs}) => {
    const dispatch=useDispatch()
    const[recipiendFoto,setRecipiendFoto]=useState<string>(noImageAvatar)
const avatar=useSelector<AppStateType,string|null|undefined>(state=>state.profilePage.authProfile?.photos.small)
const authId=useSelector<AppStateType>(state=>state.auther.id)
    const{userId}=useParams()
    const recipiendAvatar=useSelector<AppStateType,string|null|undefined>(state=>state.profilePage.profile?.photos.small)

const handleDeletemessge=useCallback ((messageId:string,recipientId:number)=>{

    dispatch(deleteUserMessage(messageId,recipientId))

},[message])

    useEffect(()=>{

        dispatch(getProfile(Number(userId)))
    },[userId])

        return (

        <div className={s.messageContainer}>
            <div className={s.messageBodyContent}>
                <div className={s.messageBodyContentHeader}>
                    {authId===message.senderId ? <div className={s.messageAvatar}>
                        <img src={avatar?avatar:noImageAvatar}/>

                    </div>:<div className={s.messageAvatar}><img  src={recipiendAvatar?recipiendAvatar:noImageAvatar}/></div>}

                    <div className={s.userInfo}>
                        <Link to={`/profile/${message.senderId}`}>
                            <p className={s.userInfo_name} >{message.senderName}</p>
                        </Link>

                        {/*<p className={s.activity}>last activity: {dialog.lastUserActivityDate.split('T')[0]}</p>*/}
                        <p className={s.activity}> {message.addedAt.split('T')[1].slice(0,8)}</p>
                        {message.body}
                        {/*<button onClick={()=>{handleDeletemessge(message.id,message.recipientId)}}>Del</button>*/}

                    </div>
                    {message.senderId===authId && <div className={s.deleteIcon}> <DeleteOutlined onClick={()=>{handleDeletemessge(message.id,message.recipientId)}} style={{fontSize:'16px'}}/></div>}
                </div>

           </div>

        </div>


    )
}


