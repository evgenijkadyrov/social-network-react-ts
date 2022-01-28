import React from 'react';
import s from './Header.module.css'

type HeaderPropsType ={

}
const Header = (props:HeaderPropsType)=> {
    return     <header className={s.header}>
        <img
            src='http://www.logobook.com/wp-content/uploads/2019/02/u_Bear_logo-1.svg'/>
    </header>
}
export default Header;