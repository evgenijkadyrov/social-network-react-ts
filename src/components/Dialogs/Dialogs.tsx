import React from "react";
import s from './Dialogs.module.css';
import {Link} from "react-router-dom";
export type dialogsType={
    id: number,
    name:string
}
export type messagesType={
    id:number,
    message:string
}
 type DialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
type DialogItemPropsType = {
    name: string,
    id: number
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

    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);

    let messagesElements = props.messages.map(el => <Message message={el.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}