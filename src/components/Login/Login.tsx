import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {LoginForm} from "./LoginForm";

export const Login = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auther.isAuth)
    const captchaUrl = useSelector<AppStateType, string | null>(state => state.auther.captchaUrl)

    if (isAuth) {
        return <Navigate to='/profile'/>
    }

    return <>
        <LoginForm captchaUrl={captchaUrl}/>
    </>
}
