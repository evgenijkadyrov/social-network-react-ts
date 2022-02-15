import React, {createRef} from "react";
import s from './Dialogs.module.css';
import {Link} from "react-router-dom";

export type dialogsType = {
    id: number,
    name: string
}
export type messagesType = {
    id: number,
    message: string
}
type DialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    addAnswer:(textMessage:string)=>void
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
        <div>
            <div className={s.message}>
                {props.message}
            </div>

        </div>
    )
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.messages.map(el => <Message message={el.message}/>);

    let newAnswerMessage = createRef<HTMLTextAreaElement>();

    const onClickSentMessageHandler = () => {
        if (newAnswerMessage.current) {
            let textMessage = newAnswerMessage.current.value;
            props.addAnswer(textMessage)
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newAnswerMessage}/>
                <button onClick={onClickSentMessageHandler}>Sent</button>
            </div>

        </div>
    )
}