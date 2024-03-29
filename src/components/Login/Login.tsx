import React, {useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {LoginForm} from "./LoginForm";

export const Login = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auther.isAuth)
    const captchaUrl = useSelector<AppStateType, string | null>(state => state.auther.captchaUrl)
const navigate=useNavigate()
    useEffect(()=>{
        debugger
        if (isAuth) {
            navigate('../profile')
        }
    },[isAuth])
    useEffect(()=>{

    })

    return <>
        <LoginForm captchaUrl={captchaUrl}/>


    </>
}
