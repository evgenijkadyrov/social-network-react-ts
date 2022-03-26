import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../../redux/profilePage-reducer";
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
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostActionCreator(text))
        }
    }
}
    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
    export default MyPostsContainer;