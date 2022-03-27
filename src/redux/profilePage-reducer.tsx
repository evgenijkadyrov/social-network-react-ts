import React from "react";
import {ActionsType} from "./store";

type PostType = {
    id: number, message: string, likesCount: number
}
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
        ] as Array<PostType>,
        newTextPost: 'newText'
    }
export type initialStateType=typeof initialState
export const profilePageReducer = (state: initialStateType=initialState, action:ActionsType ): initialStateType => {

    switch (action.type) {
        case 'ADD_POST':
            let newPost = {id: 5, message: state.newTextPost, likesCount: 5}
            let copyState={...state}
            copyState.posts=[...copyState.posts]
            copyState.posts.push(newPost)
            copyState.newTextPost=''

            return copyState
        case 'UPDATE-NEW-POST':
            /*state.newTextPost = action.newText*/
            return {...state,newTextPost:action.newText}
        default:
            return state
    }

}
export const addPostActionCreator = (): AddPostType => ({type: 'ADD_POST'})
export const UpdateNewPostActionCreator = (newText: string): UpdateNewPostType => ({type: 'UPDATE-NEW-POST', newText})