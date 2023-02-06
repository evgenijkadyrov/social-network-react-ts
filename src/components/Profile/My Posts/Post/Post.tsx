import React, {FC} from 'react';
import s from './Post.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import noImageAvatar from "../../../../common/avatars/user.png";
import {HeartOutlined, MessageOutlined,SettingOutlined,ShareAltOutlined } from '@ant-design/icons';
import {Button} from "antd";
import {
    NotificationDemoMode
} from "../../../../common/image/NotificationDemoMode/NotificationDemoMode";
import * as fakerator from "fakerator";
import {faker} from "@faker-js/faker";

export type PostPropsType = {
    message: string,
    likesCount: number
}
const Post: FC<PostPropsType> = (props) => {
    const {message, likesCount} = props
    const user_avatar = useSelector<AppStateType, string | null | undefined>(state => state.profilePage.profile?.photos.small)
    const fullName = useSelector<AppStateType, string|undefined>(state => state.profilePage.authProfile?.fullName)
const createdDate=(day:number)=>{
     const date=faker.date.recent(day).toDateString().slice(4)
     return date
    }


    return (

        <div className={s.postContainer}>
            <div className={s.postBodyContent}>
                <div className={s.postBodyContentHeader}>
                    <div className={s.postAvatar}>
                        {user_avatar ? <img src={user_avatar}/> :
                        <img src={noImageAvatar}/>}
                    </div>

                    <div className={s.userInfo}>
                        <p className={s.userInfo_name}>{fullName}</p>
                        <p className={s.userInfo_date}>{createdDate(30)}</p>
                    </div>
                    <div className={s.newPost}>
                       <NotificationDemoMode children={<SettingOutlined style={{ fontSize: '18px'}}/>}/>
                                         </div>
                </div>
                <div className={s.postMessage}>{message}</div>
                <div className={s.reactionItem}>
                    <span> <NotificationDemoMode children={<HeartOutlined style={{ fontSize: '18px', color: 'red' }}/> } /> {likesCount}
                        </span>
                    <span><NotificationDemoMode children={<MessageOutlined style={{ fontSize: '18px' }}/> } />
                        </span>
                    <span><NotificationDemoMode children={<ShareAltOutlined style={{ fontSize: '18px'}}/> } /></span>
                </div>
            </div>

        </div>


    )
}


export default Post;