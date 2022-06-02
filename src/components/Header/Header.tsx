import React from 'react';
import s from './Header.module.css'
import {Link} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
}
const Header = (props: HeaderPropsType) => {
    console.log((props.login))
    return <header className={s.header}>
        <div>
            <img src='http://www.logobook.com/wp-content/uploads/2019/02/u_Bear_logo-1.svg'/>
            <div className={s.loginBlock}>
                {props.isAuth ? <Link to={'/login'}>Login</Link> : props.login}

            </div>
        </div>


    </header>
}
export default Header;