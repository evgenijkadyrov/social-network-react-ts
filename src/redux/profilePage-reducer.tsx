import React from "react";
import {ActionsType} from "./store";

type PostType = {
    id: number, message: string, likesCount: number
}

export type AddPostType = {
    type: 'ADD_POST'
}
export type UserProfileType = {
    type: 'SET_USER_PROFILE'
    profile:any
}
export type UpdateNewPostType = {
    type: 'UPDATE-NEW-POST',
    newText: string
}

let initialState = {
    posts: [
        {id: 1, message: 'Hey, i\'m new post', likesCount: 9},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 3, message: 'You win lottery', likesCount: 55}
    ] as Array<PostType>,
    newTextPost: 'newText',
    profile: null
}
export type initialStateType = typeof initialState
export const profilePageReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'ADD_POST':

            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newTextPost, likesCount: 5}],
                newTextPost: ''
            }
        case 'UPDATE-NEW-POST':
            /*state.newTextPost = action.newText*/
            return {...state, newTextPost: action.newText}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }

}
export const addPostActionCreator = (): AddPostType => ({type: 'ADD_POST'})
export const UpdateNewPostActionCreator = (newText: string): UpdateNewPostType => ({type: 'UPDATE-NEW-POST', newText})
export const setUserProfile = (profile:UserProfileType): UserProfileType => ({type: 'SET_USER_PROFILE', profile})