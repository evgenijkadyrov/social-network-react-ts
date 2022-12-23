import React from 'react';
import s from './Header.module.css'
import {Link} from "react-router-dom";
import bear from '../../common/image/bear.svg'

type HeaderPropsType = {
    login: string
    isAuth: boolean
    logout:()=>void
}
const Header = (props: HeaderPropsType) => {
    console.log((props.login))
    return <header className={s.header}>
        <div>
            <img src={bear}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}  <button onClick={props.logout}>Log out</button></div>
                    : <Link to={'/login'}>Login</Link>   }

            </div>
        </div>


    </header>
}
export default Header;