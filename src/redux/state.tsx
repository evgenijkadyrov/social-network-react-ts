import React from "react";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsReducer} from "./dialogs-reducer";

/*const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_ANSWER = 'ADD_ANSWER'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'*/

export type StoreType = {
    _state: RootType
    _rerenderEntireTree: () => void
    getState: () => RootType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type ActionsType = AddPostType | UpdateNewPostType | AddAnswerType | AddNewMessageTextType
type AddPostType = {
    type: 'ADD_POST'
}
//автоматическое опрделение типов через ReturnType, не забыть добавить as const в функции
type UpdateNewPostType = {
type: 'UPDATE-NEW-POST', newText:string
};

type AddAnswerType = {
    type: 'ADD_ANSWER'
}
type AddNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMesText:string
}


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey, i\'m new post', likesCount: 9},
                {id: 2, message: 'How are you?', likesCount: 15},
                {id: 3, message: 'You win lottery', likesCount: 55}
            ],
            newTextPost: 'newText'
        },
        dialogsPage: {
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
        },

    },
    _rerenderEntireTree() {
        console.log('dd')
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage= profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree()
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    }
}/*
export const addPostActionCreator = (): AddPostType => ({type: 'ADD_POST'})
export const UpdateNewPostActionCreator = (newText: string) => ({type: 'UPDATE-NEW-POST', newText}) as const
export const addAnswerActionCreator = (): AddAnswerType => ({type: 'ADD_ANSWER'})
export const updateNewMessageTextActionCreator = (newMesText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMesText
}) as const*/

let rerenderEntireTree = () => {
    console.log('dd')
}

export type PostType = {
    id: number, message: string, likesCount: number
}
export type DialogType = {
    id: number, name: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newTextPost: string
}

export type MessageType = {
    id: number, message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type RootType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}
