import React from "react";
import s from './Dialogs.module.css';
import {Link} from "react-router-dom";

type DialogsPropsType = {}

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
    let DialogsData=[
        {id:1, name:'Dimych'},
        {id:2, name:'Victor'},
        {id:3, name:'Sveta'},
        {id:4, name:'Misha'},
        {id:5, name:'Maks'},
    ];
    let MessageData=[
        {id:1, message:'How are you?'},
        {id:2, message:'How long you study JS'},
        {id:3, message:'Doyou like it?'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>

            </div>
            <div className={s.messages}>
                <Message message={MessageData[0].message}/>
                <Message message={MessageData[1].message}/>
                <Message message={MessageData[2].message}/>

            </div>
        </div>
    )
}