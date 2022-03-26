import React from "react";
import {ActionsType, DialogsPageType} from "./store";


export type AddAnswerType = {
    type: 'ADD_ANSWER'
}

export type AddNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMesText: string
}

let initialState= {
    messages: [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'How long you study JS'},
        {id: 3, message: 'Doyou like it?'}
    ],
        newMessageText: '',
        dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Maks'},
    ]
}

export const dialogsReducer = (state: DialogsPageType=initialState, action: ActionsType): DialogsPageType => {

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