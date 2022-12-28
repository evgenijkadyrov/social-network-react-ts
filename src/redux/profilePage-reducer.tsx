import React from "react";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {UserProfilePhotos, UserProfileType} from "../components/Profile/ProfileContainer";

let initialState = {
    posts: [
        {id: 1, message: 'Hey, i\'m new post', likesCount: 9},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 3, message: 'You win lottery', likesCount: 55}
    ] as Array<PostType>,

    profile: null as UserProfileType|null,
    status: ''
}

export const profilePageReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'profilePage/ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPostBody,
                    likesCount: 5
                }],
            }

        case "profilePage/SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "profilePage/SET_STATUS":
            return {...state, status: action.status}
        case "profilePage/DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case "profilePage/SAVE_PHOTO":
            return {

                ...state, profile: {...state.profile,photos:action.file}as UserProfileType

            }
        default:
            return state
    }

}

//actions
export const addPost = (newPostBody: string) => ({
    type: 'profilePage/ADD_POST',
    newPostBody
} as const)

export const setUserProfile = (profile:UserProfileType) => ({
    type: 'profilePage/SET_USER_PROFILE',
    profile
} as const)
export const setUserStatus = (status: string) => ({
    type: 'profilePage/SET_STATUS',
    status
} as const)
export const deletePost = (postId: number) => ({
    type: 'profilePage/DELETE_POST',
    postId
} as const)
export const savePhotoAC = (file:UserProfilePhotos) => ({
    type: 'profilePage/SAVE_PHOTO',
    file
} as const)


//types
export type SetUserStatusType = ReturnType<typeof setUserStatus>
export type DeletePostType = ReturnType<typeof deletePost>
export type PostType = { id: number, message: string, likesCount: number}
export type AddPostType = ReturnType<typeof addPost>
export type UserProfileTypeAC = ReturnType<typeof setUserProfile>
export type SavePhotoType = ReturnType<typeof savePhotoAC>


//thunks
export const getProfile = (userId: number) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}
export const getStatus = (userId: number) => {

    return async (dispatch: Dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data))
    }
}
export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}
export const savePhoto = (file: File) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoAC(response.data.data.photos))
        }
    }
}
export const saveProfile = (profile: UserProfileType) => {
    return async (dispatch: Dispatch,getState:any) => {
        const userId=getState().auther.id
        let response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
                       // @ts-ignore
            dispatch(getProfile(userId))
        }
    }
}

//types
type ActionsType = SetUserStatusType | AddPostType | UserProfileTypeAC | DeletePostType|SavePhotoType
export type initialStateType = typeof initialState