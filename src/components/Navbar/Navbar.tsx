import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css'

type NavbarPropsType={

}
 export const Navbar = (props: NavbarPropsType)=> {
    return    <nav className={s.nav}>
        <div className={s.item}><Link to= {'profile'} >Profile</Link> </div>
        <div className={s.item}><Link to={'dialogs'}>Message</Link></div>
        <div className={s.item}><Link to={'users'}>Users</Link></div>
        <div className={s.item}><Link  to={'news'}>News</Link></div>
        <div className={s.item}><Link  to={'music'}>Music</Link></div>
        <div className={s.item}><Link  to={'settings'}>Settings</Link></div>
    </nav>
};