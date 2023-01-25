import React, {FC} from 'react';
import s from './Header.module.css'
import {Link} from "react-router-dom";
import bear from '../../common/image/bear.svg'

type HeaderPropsType = {
    login: string|null
    isAuth: boolean
    logout:()=>void
}
const Header:FC<HeaderPropsType> = (props) => {
   const {login, isAuth, logout}=props
    return <header className={s.header}>
        <div>
            <img src={bear}/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login}  <button onClick={logout}>Log out</button></div>
                    : <Link to={'/login'}>Login</Link>   }

            </div>
        </div>


    </header>
}
export default Header;