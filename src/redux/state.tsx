import React from "react";
import {rerenderEntireTree} from "../render";

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
    newMessageText:string
}
export type RootType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}


export let state: RootType = {
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
        newMessageText:'yoyo',
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Victor'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Misha'},
            {id: 5, name: 'Maks'},
        ]
    },

}
export const addPost = () => {

    let newPost = {id: 5, message: state.profilePage.newTextPost, likesCount: 5}
    state.profilePage.posts.push(newPost)
    state.profilePage.newTextPost=''
    rerenderEntireTree(state)
}
export const addAnswer = () => {
    let newAnswer = {id: 4, message: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.push(newAnswer)
    state.dialogsPage.newMessageText=''
    rerenderEntireTree(state)
}
export let updateNewPost = (newText: string) => {
    state.profilePage.newTextPost = newText
    rerenderEntireTree(state)
}
export const updateNewMessageText=(newMesText:string)=>{
    state.dialogsPage.newMessageText=newMesText;
    rerenderEntireTree(state)
}