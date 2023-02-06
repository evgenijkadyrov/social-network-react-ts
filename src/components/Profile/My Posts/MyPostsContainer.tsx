import React from 'react';
import MyPosts from "./MyPosts";
import {actions, PostType} from "../../../redux/profilePage-reducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {useParams} from "react-router-dom";
import s from './MyPostsContainer.module.css'

export const MyPostsContainer = () => {
    const posts = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts)
    let {userId}: any = useParams()

    return (<div className={s.wrapperContainer}>
        {!userId && <MyPosts posts={posts} />}
    </div>)
};
