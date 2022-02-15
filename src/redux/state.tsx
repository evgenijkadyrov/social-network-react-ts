import React from "react";

 export let store={
     _state:  {
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
             newMessageText:'',
             dialogs: [
                 {id: 1, name: 'Dimych'},
                 {id: 2, name: 'Victor'},
                 {id: 3, name: 'Sveta'},
                 {id: 4, name: 'Misha'},
                 {id: 5, name: 'Maks'},
             ]
         },

     },
     _rerenderEntireTree (){
         console.log('dd')
     },
     getState () {
         return this._state
     },
     dispatch (action:any){
         if(action.type==='ADD_POST'){
             let newPost = {id: 5, message: this._state.profilePage.newTextPost, likesCount: 5}
             this._state.profilePage.posts.push(newPost)
             this._state.profilePage.newTextPost=''
             this._rerenderEntireTree()
         } else if(action.type==="ADD-ANSWER"){
             let newAnswer = {id: 4, message: this._state.dialogsPage.newMessageText}
             this._state.dialogsPage.messages.push(newAnswer)
             this._state.dialogsPage.newMessageText=''
             this._rerenderEntireTree()
         } else if (action.type==='UPDATE-NEW-POST'){

             this._state.profilePage.newTextPost = action.newText
             this._rerenderEntireTree()
         }else if(action.type==='UPDATE-NEW-MESSAGE-TEXT')
             this._state.dialogsPage.newMessageText=action.newMesText;
         this._rerenderEntireTree()
     },
     subscribe (observer:()=>void) {
         this._rerenderEntireTree=observer
     }
     /*addPost  ()  {
         let newPost = {id: 5, message: this._state.profilePage.newTextPost, likesCount: 5}
         this._state.profilePage.posts.push(newPost)
         this._state.profilePage.newTextPost=''
         this._rerenderEntireTree()
     },
     addAnswer  ()  {
         let newAnswer = {id: 4, message: this._state.dialogsPage.newMessageText}
         this._state.dialogsPage.messages.push(newAnswer)
         this._state.dialogsPage.newMessageText=''
         this._rerenderEntireTree()
     },
     updateNewPost  (newText: string) {
         this._state.profilePage.newTextPost = newText
         this._rerenderEntireTree()
     },
     updateNewMessageText(newMesText:string){
         this._state.dialogsPage.newMessageText=newMesText;
         this._rerenderEntireTree()
     },*/


 }

let rerenderEntireTree=()=>{
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
    newMessageText:string
}
export type RootType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

/*

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
        newMessageText:'',
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
    rerenderEntireTree()
}
export const addAnswer = () => {
    let newAnswer = {id: 4, message: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.push(newAnswer)
    state.dialogsPage.newMessageText=''
    rerenderEntireTree()
}
export let updateNewPost = (newText: string) => {
    state.profilePage.newTextPost = newText
    rerenderEntireTree()
}
export const updateNewMessageText=(newMesText:string)=>{
    state.dialogsPage.newMessageText=newMesText;
    rerenderEntireTree()
}
*/
/*
export const subscribe=(observer:()=>void)=>{
    rerenderEntireTree=observer
}*/
