import React from 'react';
import MyPosts from "../MyPosts";
import {actions} from "../../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPost: (newPostBody:string) => {
            dispatch(actions.addPost(newPostBody))
        },

    }
}
    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
    export default MyPostsContainer;