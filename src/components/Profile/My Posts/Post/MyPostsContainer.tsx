import React from 'react';
import MyPosts from "../MyPosts";
import {addPost} from "../../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPost: (newPostBody:string) => {
            dispatch(addPost(newPostBody))
        },

    }
}
    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
    export default MyPostsContainer;