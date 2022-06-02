import React from "react";
import {AddPostType, profilePageReducer, UpdateNewPostType, UserProfileType} from "./profilePage-reducer";
import {AddAnswerType, AddNewMessageTextType,  dialogsReducer} from "./dialogs-reducer";
import {ActionType} from "./users-reducer";
import {SetUserDataType} from "./auther-reducer";


export type StoreType = {
    _state: RootType
    _rerenderEntireTree: (state:RootType) => void
    getState: () => RootType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type ActionsType = AddPostType | UpdateNewPostType |AddAnswerType |
    AddNewMessageTextType|ActionType|UserProfileType|SetUserDataType

//автоматическое опрделение типов через ReturnType, не забыть добавить as const в функции


/*export let store: StoreType = {
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

        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree(this._state)
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    }
}*/

/*let rerenderEntireTree = () => {
    console.log('dd')*/
/*}*/

 type PostType = {
    id: number, message: string, likesCount: number
}

 type ProfilePageType = {
    posts: Array<PostType>
    newTextPost: string
}
type DialogType = {
    id: number, name: string
}
 type MessageType = {
    id: number, message: string
}
 type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type RootType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}
