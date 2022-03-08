import React from "react";

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
type UpdateNewPostType = ReturnType<typeof UpdateNewPostActionCreator>;

type AddAnswerType = {
    type: 'ADD_ANSWER'
}
type AddNewMessageTextType = ReturnType<typeof updateNewMessageTextActionCreator>


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
        if (action.type === 'ADD_POST') {
            let newPost = {id: 5, message: this._state.profilePage.newTextPost, likesCount: 5}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newTextPost = ''
            this._rerenderEntireTree()
        } else if (action.type === 'ADD_ANSWER') {
            let newAnswer = {id: 4, message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newAnswer)
            this._state.dialogsPage.newMessageText = ''
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newTextPost = action.newText
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT')
            this._state.dialogsPage.newMessageText = action.newMesText;
        this._rerenderEntireTree()
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    }
}
export const addPostActionCreator = (): AddPostType => ({type: 'ADD_POST'})
export const UpdateNewPostActionCreator = (newText: string) => ({type: 'UPDATE-NEW-POST', newText}) as const
export const addAnswerActionCreator = (): AddAnswerType => ({type: 'ADD_ANSWER'})
export const updateNewMessageTextActionCreator = (newMesText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMesText
}) as const

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
