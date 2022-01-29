import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

type NavbarPropsType={

}
 export const Navbar = (props: NavbarPropsType)=> {
    return    <nav className={s.nav}>
        <div className={s.item}><NavLink to= {'profile'} >Profile</NavLink> </div>
        <div className={s.item}><NavLink to={'dialogs'}>Message</NavLink></div>
        <div className={s.item}><NavLink  to={'news'}>News</NavLink></div>
        <div className={s.item}><NavLink  to={'music'}>Music</NavLink></div>
        <div className={s.item}><NavLink  to={'settings'}>Settings</NavLink></div>
    </nav>
};