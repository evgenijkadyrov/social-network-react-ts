import React from "react";
import {ActionsTypes, AppThunk} from "./redux-store";
import {dialogsAPI, ResponseDialogType, ResponseMessageType} from "../api/dialogs-api";

let initialState = {
    messages: [] as ResponseMessageType[],
    dialogs: [] as ResponseDialogType[]
}

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "dialogs/GET_MESSAGES":
            return {
                ...state,
                messages: action.messages
            }
        case "dialogs/GET_DIALOGS":
            return {
                ...state,
                dialogs: action.dialogs
            }
        case "dialogs/ADD_MESSAGE":
            return{
                ...state,
                messages: [ ...state.messages,action.newMessage]
            }
        case "dialogs/START_DIALOG":
            return {
                ...state,
                dialogs:[action.data.data,...state.dialogs],
                messages: action.data.messages
            }
        case "dialogs/DELETE_MESSAGE":
            return {
                ...state,
               messages: state.messages.filter(el=>el.id!==action.messageId)

            }
        default:
            return state
    }
}

//actions
export const actions = {
    addMessage: (newMessage: any) => ({
        type: 'dialogs/ADD_MESSAGE',
        newMessage
    } as const),
    getMessages: (messages:ResponseMessageType[]) => ({
        type: 'dialogs/GET_MESSAGES',
        messages
    } as const),
    getDialogs: (dialogs: ResponseDialogType[]) => ({
        type: 'dialogs/GET_DIALOGS',
        dialogs
    } as const),
    startDialog:(data:any)=>({
        type:'dialogs/START_DIALOG',
        data
    }as const),
    deleteMessage:(messageId:string)=>({
        type:'dialogs/DELETE_MESSAGE',
        messageId
    }as const)
}
//thunks
export const requestDialogs = (): AppThunk => {
    return async (dispatch) => {
        let data = await dialogsAPI.getDialogs()
        dispatch(actions.getDialogs(data))

    }
}
export const startDialog = (userId:number): AppThunk => {
    return async (dispatch) => {

        let data = await dialogsAPI.startDialog(userId)
        dispatch(actions.startDialog(data))


    }
}
export const deleteUserMessage = (messageId:string,userId:number): AppThunk => {
    return async (dispatch) => {
        let data = await dialogsAPI.deleteMessage(messageId)

        if(data.resultCode===0){
            dispatch(actions.deleteMessage(messageId))
            dispatch(requestMessages(userId))
        }
    }
}
export const requestMessages = (userId:number): AppThunk => {
    return async (dispatch) => {
        let data = await dialogsAPI.getMessages(userId)
        dispatch(actions.getMessages(data.items))
    }
}

export const requestMessage = (userId:string,newMessageBody:string): AppThunk => {
    return async (dispatch) => {
        let data = await dialogsAPI.sentMessage(userId,newMessageBody)
        dispatch(actions.addMessage(data))
    }
}


//types

export type ActionsType = ActionsTypes<typeof actions>
export type InitialStateType = typeof initialState
