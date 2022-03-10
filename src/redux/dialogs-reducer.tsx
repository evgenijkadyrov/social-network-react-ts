import React from "react";
import {DialogsPageType} from "./state";


type AddAnswerType = {
    type: 'ADD_ANSWER'
}
export type ActionsType =  AddAnswerType | AddNewMessageTextType
type AddNewMessageTextType = ReturnType<typeof updateNewMessageTextActionCreator>
export const dialogsReducer=(state:DialogsPageType, action:ActionsType)=>{
    switch (action.type) {
        case 'ADD_ANSWER':
            let newAnswer = {id: 4, message: state.newMessageText}
            state.messages.push(newAnswer)
            state.newMessageText = ''
            break;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMesText;
            break;
        default:return state
    }

}
export const addAnswerActionCreator = (): AddAnswerType => ({type: 'ADD_ANSWER'})
export const updateNewMessageTextActionCreator = (newMesText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMesText
}) as const