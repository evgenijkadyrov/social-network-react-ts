import React from "react";
import {ActionsType, DialogsPageType} from "./state";


export type AddAnswerType = {
    type: 'ADD_ANSWER'
}

export type AddNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMesText: string
}



export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    debugger
    switch (action.type) {
        case 'ADD_ANSWER':
            let newAnswer = {id: 4, message: state.newMessageText}
            state.messages.push(newAnswer)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMesText;
            return state
        default:
            return state
    }

}
export const addAnswerActionCreator = (): AddAnswerType => ({type: 'ADD_ANSWER'})
export const updateNewMessageTextActionCreator = (newMesText: string): AddNewMessageTextType => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMesText
})