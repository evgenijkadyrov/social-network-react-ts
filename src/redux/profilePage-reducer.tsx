import React from "react";
import {ActionsType, ProfilePageType} from "./store";


export type AddPostType = {
    type: 'ADD_POST'
}
export type UpdateNewPostType = {
    type: 'UPDATE-NEW-POST',
    newText: string
}

let initialState={
        posts: [
            {id: 1, message: 'Hey, i\'m new post', likesCount: 9},
            {id: 2, message: 'How are you?', likesCount: 15},
            {id: 3, message: 'You win lottery', likesCount: 55}
        ],
        newTextPost: 'newText'
    }

export const profilePageReducer = (state: ProfilePageType=initialState, action:ActionsType ): ProfilePageType => {

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