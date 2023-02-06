import React, {FC} from 'react';
import s from './Header.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auther-reducer";
import {LoginOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons'
import {Avatar, Button} from "antd";


export const HeaderCustom: FC = (props) => {

    const name = useSelector<AppStateType>(state => state.profilePage.authProfile?.fullName)
    const isAuth = useSelector<AppStateType>(state => state.auther.isAuth)
    const avatarUrl = useSelector<AppStateType, string | null | undefined>(state => state.profilePage.authProfile?.photos.small)

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }

    return <div className={s.header}>

        <div className={s.loginBlock}>

            {isAuth
                ? <div className={s.block}>
                    <Button className={s.btn}
                            type="primary"
                            icon={<LogoutOutlined style={{fontSize: '24x'}}/>}
                            onClick={handleLogout}
                    >Log out </Button>
                    <span className={s.avatar}>
                        {avatarUrl ? <Avatar size={42} src={avatarUrl}/> :
                            <Avatar icon={<UserOutlined/>}/>}
                                            </span>
                    <span className={s.name}> {name}</span>

                </div>
                : <Button type="primary"><Link to={'/login'}><LoginOutlined
                    style={{fontSize: '24x'}}/></Link></Button>
            }

        </div>
    </div>


}
