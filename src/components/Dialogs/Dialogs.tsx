import React, {ChangeEvent, createRef} from "react";
import s from './Dialogs.module.css';
import {Link, Navigate} from "react-router-dom";
import {InitialStateType} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogsPage: InitialStateType
    addAnswerActionCreator: () => void
    updateNewMessageText: (newText: string) => void
    isAuth:boolean
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
        props.addAnswerActionCreator()
    }
    const onChangeUpdateMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMesText = e.currentTarget.value
        props.updateNewMessageText(newMesText)
    }
if (!props.isAuth) return <Navigate to={'/login'}/>
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