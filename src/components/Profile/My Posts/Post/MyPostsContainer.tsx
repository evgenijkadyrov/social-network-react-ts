import React from 'react';
import MyPosts, {DispatchPropsType, MapPropsType} from "../MyPosts";
import {actions} from "../../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";


const mapStateToProps = (state: AppStateType):MapPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect<MapPropsType,DispatchPropsType, { },AppStateType>(mapStateToProps, {
    addPost: actions.addPost
})(MyPosts);
export default MyPostsContainer;