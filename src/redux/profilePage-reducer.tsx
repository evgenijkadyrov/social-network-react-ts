import React from "react";
import {ActionsType, ProfilePageType} from "./state";


export type AddPostType = {
    type: 'ADD_POST'
}
export type UpdateNewPostType = {
    type: 'UPDATE-NEW-POST',
    newText: string
}



export const profilePageReducer = (state: ProfilePageType, action:ActionsType ): ProfilePageType => {
    debugger
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {id: 5, message: state.newTextPost, likesCount: 5}
            state.posts.push(newPost)
            state.newTextPost = ''
            return state
        case 'UPDATE-NEW-POST':
            state.newTextPost = action.newText
            return state
        default:
            return state
    }

}
export const addPostActionCreator = (): AddPostType => ({type: 'ADD_POST'})
export const UpdateNewPostActionCreator = (newText: string): UpdateNewPostType => ({type: 'UPDATE-NEW-POST', newText})