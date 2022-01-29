import React from "react";
import s from './Dialogs.module.css';
import {Link} from "react-router-dom";

type DialogsPropsType = {}
type DialogItemPropsType = {
    name: string,
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <Link to={`dialogs/${props.id}`}>{props.name}</Link>
        </div>
    )
}
type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}
export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Victor'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Misha'} id={'4'}/>
                <DialogItem name={'Maks'} id={'5'}/>
            </div>
            <div className={s.messages}>
                <Message message={'How are you?'}/>
                <Message message={'How long you study JS'}/>
                <Message message={'Doyou like it?'}/>
            </div>
        </div>
    )
}