import React, {FC} from 'react';
import s from './Dialog.module.css'
import noImageAvatar from "../../common/avatars/user.png";
import {PlusOutlined, MailOutlined} from '@ant-design/icons';

import {DialogType, requestMessages} from "../../redux/dialogs-reducer";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

export type DialogPropsType = {
dialog:DialogType
}
export const Dialog: FC<DialogPropsType> = ({dialog}) => {
    const dispatch=useDispatch()
const handleUserMessages=(userId:number)=>{

    dispatch(requestMessages(userId))
}
        return (

        <div className={s.dialogContainer}>
            <div className={s.dialogBodyContent}>
                <div className={s.dialogBodyContentHeader}>
                    <div className={s.dialogAvatar}>
                        {dialog.photos.small ? <img src={dialog.photos.small}/> :
                        <img src={noImageAvatar}/>}
                    </div>

                    <div className={s.userInfo}>
                        <Link to={`/dialogs/${dialog.id}`}>
                            <p className={s.userInfo_name} onClick={()=>handleUserMessages(dialog.id)}>{dialog.userName}</p>
                        </Link>

                        <p className={s.activity}>last activity: {dialog.lastUserActivityDate.split('T')[0]}</p>

                    </div>
                    {dialog.newMessagesCount>0 && <div className={s.unreadMessage}>
                        <PlusOutlined style={{fontSize:'10px', marginRight:'3px'}}/>{dialog.newMessagesCount}<MailOutlined style={{marginLeft:'3px'}} />
                    </div>}
                    {/*<div className={s.newDialog}>*/}
                    {/*   <NotificationDemoMode children={<SettingOutlined style={{ fontSize: '18px'}}/>}/>*/}
                    {/*                     </div>*/}
                </div>


            </div>

        </div>


    )
}


