import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {requestDialogs} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dialog} from "./Dialog";
import s from './DialogsList.module.css'
import {useNavigate} from "react-router-dom";
import ButtonBack from "../../common/ButtonBack/ButtonBack";
import {ResponseDialogType} from "../../api/dialogs-api";


const DialogsList = () => {

    const dialogs = useSelector<AppStateType, ResponseDialogType[]>(state => state.dialogsPage.dialogs)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auther.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuth) {
            dispatch(requestDialogs())
        } else {
            navigate('../login', {replace: true})
        }
    }, [isAuth])
    return (
        <div className={s.wrapperContainer}>
            <div className={s.container}>
                <div className={s.btnBack}><ButtonBack/></div>
                {dialogs.map(el => <Dialog dialog={el} key={el.id}/>)}
            </div>

        </div>
    );
};
export default DialogsList
