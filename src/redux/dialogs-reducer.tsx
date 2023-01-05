import React from "react";
import {ActionsTypes} from "./redux-store";

let initialState = {
    messages: [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'How long you study JS'},
        {id: 3, message: 'Doyou like it?'}
    ] as Array<MessageType>,

    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Maks'},
    ] as Array<DialogType>
}

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'dialogs/ADD_ANSWER':
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessageBody}]
            }
        default:
            return state
    }
}

//actions
export const actions = {
    addAnswer: (newMessageBody: string) => ({
        type: 'dialogs/ADD_ANSWER',
        newMessageBody
    } as const)

}

//types

type DialogType = {
    id: number,
    name: string
}
type MessageType = {
    id: number,
    message: string
}
export type ActionsType = ActionsTypes<typeof actions>
export type InitialStateType = typeof initialState
