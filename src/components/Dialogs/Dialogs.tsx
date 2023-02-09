import React, {ChangeEvent, createRef, FC} from "react";
import s from "../Dialogs/Dialogs.module.css";
import {Link} from "react-router-dom";
import {
    actions,
    DialogType,
    InitialStateType,
    MessageType
} from "../../redux/dialogs-reducer";
import {AddMessageForm,  FormDataType} from "./Message/AddMessageForm";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type DialogsPropsType = {
    // dialogsPage: InitialStateType
    // addAnswer: (newMessageBody:string) => void
    // updateNewMessageText: (newText: string) => void

}
type DialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem:FC<DialogItemPropsType> = ({id, name}) => {
    return (
        <div className={s.dialog}>
            <Link to={`dialogs/${id}`}>{name}</Link>
        </div>
    )
}
type MessagePropsType = {
    message: string
}
const Message:FC<MessagePropsType> = ({message}) => {
    return (
        <div>
            <div className={s.message}>
                {message}
            </div>

        </div>
    )
}

 const Dialogs:FC<DialogsPropsType> = () => {
const dialogs=useSelector<AppStateType,DialogType[]>(state=>state.dialogsPage.dialogs)
const messages=useSelector<AppStateType,MessageType[]>(state=>state.dialogsPage.messages)

    let dialogsElements = dialogs.map(el => <DialogItem name={el.userName} id={el.id} key={el.id}/>);
    let messagesElements = messages.map(el => <Message message={el.body} key={el.id}/>);


//
// let addNewMessage=(values: any)=>{
//        actions.addAnswer(values.newMessageBody)
// }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm />

            </div>

        </div>
    )
}
export default Dialogs