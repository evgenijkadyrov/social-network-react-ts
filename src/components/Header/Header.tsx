import React, {FC, useEffect} from 'react';
import s from './Header.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auther-reducer";
import {LoginOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons'
import {Avatar, Button} from "antd";


export const HeaderCustom: FC = (props) => {

    const name = useSelector<AppStateType,string|undefined>(state => state.profilePage.authProfile?.fullName)
    const isAuth = useSelector<AppStateType,boolean>(state => state.auther.isAuth)
    const avatarUrl = useSelector<AppStateType, string | null | undefined>(state => state.profilePage.authProfile?.photos.small)
const navigate=useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!isAuth){
            navigate('login')
        }
    },[isAuth])
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
                : <Button type="primary"><LoginOutlined
                    style={{fontSize: '24x'}}/></Button>
            }

        </div>
    </div>


}
