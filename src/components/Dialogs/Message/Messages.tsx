import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogType, MessageType} from "../../../redux/dialogs-reducer";
import s from "./Messages.module.css";
import {Message} from "./Message";
import {AddMessageForm} from "./AddMessageForm";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons"
import ButtonBack from "../../../common/ButtonBack/ButtonBack";

export const Messages = () => {
    const messages = useSelector<AppStateType, MessageType[]>(state => state.dialogsPage.messages)
    const dialogs = useSelector<AppStateType, DialogType[]>(state => state.dialogsPage.dialogs)

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
