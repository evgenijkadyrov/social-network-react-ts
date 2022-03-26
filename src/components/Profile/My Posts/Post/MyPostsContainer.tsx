import React, {ChangeEvent, createRef, DetailedHTMLProps, TextareaHTMLAttributes} from 'react';


import MyPosts from "../MyPosts";
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../../redux/profilePage-reducer";
import {ActionsType, ProfilePageType} from "../../../../redux/store";


type MyPostsPropsContainerType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const MyPostsContainer = (props: MyPostsPropsContainerType) => {

    const onClickAddPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onChangeUpdateText = (text: string) => {

        props.dispatch(UpdateNewPostActionCreator(text))
    }
    return <MyPosts addPost={onClickAddPost} updateNewPostText={onChangeUpdateText} profilePage={props.profilePage}/>

}
export default MyPostsContainer;