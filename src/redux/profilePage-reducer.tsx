import React from "react";

import {Dispatch} from "redux";
import {profileAPI} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: 'Hey, i\'m new post', likesCount: 9},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 3, message: 'You win lottery', likesCount: 55}
    ] as Array<PostType>,
    newTextPost: 'newText',
    profile: null,
    status: ''
}
type ActionsType=SetUserStatusType| AddPostType|UserProfileType|UpdateNewPostType
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

            return {...state, newTextPost: action.newText}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_STATUS":
            return {...state, status: action.status}
        default:
            return state
    }

}

//actions
export const addPost = () => ({type: 'ADD_POST'} as const)
export const UpdateNewPost = (newText: string) => ({type: 'UPDATE-NEW-POST', newText} as const)
export const setUserProfile = (profile: any) => ({type: 'SET_USER_PROFILE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'SET_STATUS', status} as const)

//types
export type SetUserStatusType = ReturnType<typeof setUserStatus>
type PostType = {
    id: number, message: string, likesCount: number
}
export type AddPostType = ReturnType<typeof addPost>
export type UserProfileType = ReturnType<typeof setUserProfile>
export type UpdateNewPostType = ReturnType<typeof UpdateNewPost>

//thunks
export const getProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))

            })
    }
}
export const getStatus = (userId: number) => {

    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}