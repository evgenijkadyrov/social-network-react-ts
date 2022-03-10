import React from "react";
import {ProfilePageType, RootType} from "./state";
type AddPostType = {
    type: 'ADD_POST'
}
type UpdateNewPostType = ReturnType<typeof UpdateNewPostActionCreator>;

/*type profilePageReducerType={
    state:RootType
    action:any
}*/

export type ActionsType = AddPostType | UpdateNewPostType
export const profilePageReducer=(state:ProfilePageType, action:ActionsType)=>{
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {id: 5, message: state.newTextPost, likesCount: 5}
            state.posts.push(newPost)
            state.newTextPost = ''
            break;
        case 'UPDATE-NEW-POST':
            state.newTextPost = action.newText
            break;
        default:return state
    }

}
export const addPostActionCreator = (): AddPostType => ({type: 'ADD_POST'})
export const UpdateNewPostActionCreator = (newText: string) => ({type: 'UPDATE-NEW-POST', newText}) as const