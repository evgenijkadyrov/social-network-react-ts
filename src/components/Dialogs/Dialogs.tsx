import React, {ChangeEvent, createRef} from "react";
import s from "../Dialogs/Dialogs.module.css";
import {Link} from "react-router-dom";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {AddMessageReduxForm, FormDataType} from "./Message/Message";


type DialogsPropsType = {
    dialogsPage: InitialStateType
    addAnswer: (newMessageBody:any) => void
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



let addNewMessage=(values:any)=>{
       props.addAnswer(values.newMessageBody)
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>

            </div>

        </div>
    )
}