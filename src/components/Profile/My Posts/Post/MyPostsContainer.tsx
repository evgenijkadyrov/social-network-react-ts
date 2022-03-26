import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../../redux/profilePage-reducer";
import {StoreType} from "../../../../redux/store";


type MyPostsPropsContainerType = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostsPropsContainerType) => {
    let state = props.store.getState()
    const onClickAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onChangeUpdateText = (text: string) => {

        props.store.dispatch(UpdateNewPostActionCreator(text))
    }
    return <MyPosts addPost={onClickAddPost} updateNewPostText={onChangeUpdateText} profilePage={state.profilePage}/>

}
export default MyPostsContainer;