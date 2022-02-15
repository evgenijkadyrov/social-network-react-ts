import React, {ChangeEvent, createRef} from "react";
import s from './Dialogs.module.css';
import {Link} from "react-router-dom";
import {DialogsPageType} from "../../redux/state";

export type dialogsType = {
    id: number,
    name: string
}
export type messagesType = {
    id: number,
    message: string
}
type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: any
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

    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.dialogsPage.messages.map(el => <Message message={el.message}/>);

    let newAnswerMessage = createRef<HTMLTextAreaElement>();

    const onClickSentMessageHandler = () => {
        if (newAnswerMessage.current) {

            props.dispatch({type: 'ADD-ANSWER'})
        }
    }
    const onChangeUpdateMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMesText = e.currentTarget.value
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newMesText};
        props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={props.dialogsPage.newMessageText} onChange={onChangeUpdateMessage}
                          ref={newAnswerMessage}/>
                <button onClick={onClickSentMessageHandler}>Sent</button>
            </div>

        </div>
    )
}