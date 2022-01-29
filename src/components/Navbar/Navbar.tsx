import React from 'react';
import s from './Navbar.module.css'

type NavbarPropsType={

}
 export const Navbar = (props: NavbarPropsType)=> {
    return    <nav className={s.nav}>
        <div ><a className={s.item} href={'profile'}>Profile</a> </div>
        <div ><a className={s.active} href={'dialogs'}>Message</a></div>
        <div ><a className={s.item} href={'news'}>News</a></div>
        <div ><a className={s.item} href={'music'}>Music</a></div>
        <div ><a className={s.item} href={'settings'}>Settings</a></div>
    </nav>
};