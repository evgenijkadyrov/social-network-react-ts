import React from "react";
import {ResultCode} from "../api/api";
import {UserProfilePhotos, UserProfileType} from "../components/Profile/ProfileContainer";
import {ActionsTypes, AppThunk} from "./redux-store";
import {profileAPI} from "../api/profile-api";

let initialState = {
    posts: [
        {id: 1, message: 'Hey, i\'m new post', likesCount: 9},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 3, message: 'You win lottery', likesCount: 55}
    ] as Array<PostType>,

    profile: null as UserProfileType | null,
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

                ...state,
                profile: {...state.profile, photos: action.file} as UserProfileType

            }
        default:
            return state
    }

}

//actions
export const actions = {
    addPost: (newPostBody: string) => ({
        type: 'profilePage/ADD_POST',
        newPostBody
    } as const),
    setUserProfile: (profile: UserProfileType) => ({
        type: 'profilePage/SET_USER_PROFILE',
        profile
    } as const),
    setUserStatus: (status: string) => ({
        type: 'profilePage/SET_STATUS',
        status
    } as const),
    deletePost: (postId: number) => ({
        type: 'profilePage/DELETE_POST',
        postId
    } as const),
    savePhotoAC: (file: UserProfilePhotos) => ({
        type: 'profilePage/SAVE_PHOTO',
        file
    } as const),
}


//thunks
export const getProfile = (userId: number | null): AppThunk => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(actions.setUserProfile(data))
    }
}
export const getStatus = (userId: number | null): AppThunk => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(actions.setUserStatus(data))
    }
}
export const updateStatus = (status: string): AppThunk => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === ResultCode.Success) {
            dispatch(actions.setUserStatus(status))
        }
    }
}
export const savePhoto = (file: File): AppThunk => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)
        if (data.resultCode === ResultCode.Success) {
            dispatch(actions.savePhotoAC(data.data.photos))
        }
    }
}
export const saveProfile = (profile: UserProfileType): AppThunk => {
    return async (dispatch, getState) => {
        const userId = getState().auther.id
        let data = await profileAPI.saveProfile(profile)
        if (data.resultCode === ResultCode.Success) {
            if (userId != null) {
                dispatch(getProfile(userId))
            } else {
                throw Error('userId cant be null')
            }
        }
    }
}

//types
export type PostType = { id: number | null, message: string, likesCount: number }
export type ActionsType = ActionsTypes<typeof actions>

export type initialStateType = typeof initialState