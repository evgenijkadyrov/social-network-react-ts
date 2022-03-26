import React from "react";
import {ActionsType} from "./store";

export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}

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
    ] as Array<MessageType>,
        newMessageText: '',
        dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Maks'},
    ] as Array<DialogType>
}

export type InitialStateType= typeof initialState


export const dialogsReducer = (state: InitialStateType=initialState, action: ActionsType): InitialStateType => {

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