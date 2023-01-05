import React from "react";
import {actions, PostType, profilePageReducer} from "./profilePage-reducer";
let initialState = {
    posts: [
        {id: 1, message: 'Hey, i\'m new post', likesCount: 9},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 3, message: 'You win lottery', likesCount: 55}
    ] ,
    profile: null,
    status: ''
}
test('post should be delete',()=>{
    let action=actions.deletePost(1)
    let newState=profilePageReducer(initialState,action)

    expect(newState.posts.length).toBe(2)
})