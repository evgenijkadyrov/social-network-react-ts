import React from 'react';
import s from './Navbar.module.css'

type NavbarPropsType={

}
 export const Navbar = (props: NavbarPropsType)=> {
    return    <nav className={s.nav}>
        <div className={s.item}>Profile</div>
        <div className={`${s.item}+${s.active}`}>Message</div>
        <div className={s.item}>News</div>
        <div className={s.item}>Music</div>
        <div className={s.item}>Settings</div>
    </nav>
};