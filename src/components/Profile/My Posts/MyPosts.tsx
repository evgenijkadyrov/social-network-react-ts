import React, {FC, memo} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/profilePage-reducer";
import {} from "./NewPostForm";
import {Button} from "antd";
import { PlusOutlined} from '@ant-design/icons';
import {AddNewPost} from "./AddNewPost";


export type MapPropsType={
    posts: PostType[]
}

export type AddNewPostPropsType ={
    newPostBody:string
}
const MyPosts: FC<MapPropsType> = memo((props) => {
   const {posts}=props

    let postElement = posts.map(el => <Post
        key={el.id}
        message={el.message}
        likesCount={el.likesCount}/>)

    return <div className={s.wrapperContainer}>
        <div className={s.container}>
            <div className={s.postsHeader}>
                <h2>My posts</h2>
                <AddNewPost  />
            </div>
            <div >
                {postElement}
            </div>

        </div>
        {/*<div className={s.myPosts}><h3>My posts</h3>*/}

        {/*    <AddNewPostReduxForm onSubmit={addNewPost}/>*/}
        {/*    <div className={'Posts'}>*/}
        {/*        {postElement}*/}

        {/*    </div>*/}

        {/*</div>*/}
    </div>


})
export default MyPosts;