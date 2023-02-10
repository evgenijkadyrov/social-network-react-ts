import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import s from "./Messages.module.css";
import {Message} from "./Message";
import {AddMessageForm} from "./AddMessageForm";
import ButtonBack from "../../../common/ButtonBack/ButtonBack";
import {ResponseDialogType, ResponseMessageType} from "../../../api/dialogs-api";

export const Messages = () => {
    const messages = useSelector<AppStateType, ResponseMessageType[]>(state => state.dialogsPage.messages)
    const dialogs = useSelector<AppStateType, ResponseDialogType[]>(state => state.dialogsPage.dialogs)

    return (
        <div className={s.wrapperContainer}>
            <div className={s.container}>
                <div className={s.btnBack}>
                    <ButtonBack/>
                </div>


                <div className={s.messageItem}>
                    {messages.map(el => <Message message={el} dialogs={dialogs}/>)}
                </div>
                <div className={s.textarea}>
                    <AddMessageForm/>
                </div>
            </div>


        </div>
    );
};
