import React from "react";

export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}

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
type ActionsType=AddAnswerType
export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD_ANSWER':

            return {...state, messages: [...state.messages, {id: 4, message: action.newMessageBody}]}

        default:
            return state
    }

}
//actions
export const addAnswer = (newMessageBody:any) => ({type: 'ADD_ANSWER', newMessageBody} as const)


//types
export type AddAnswerType = ReturnType<typeof addAnswer >
