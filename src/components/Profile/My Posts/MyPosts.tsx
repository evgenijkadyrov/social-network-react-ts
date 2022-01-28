import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type MyPostsPropsType = {}

const MyPosts = (props: MyPostsPropsType) => {
    return <div> My posts
        <div>
            <textarea>New Post</textarea>
        </div>
        <button>Add post</button>
        <div className={'Posts'}>
            <Post/>
            <Post/>
        </div>
    </div>

}
export default MyPosts;