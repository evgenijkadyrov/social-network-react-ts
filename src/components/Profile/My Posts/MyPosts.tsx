import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type MyPostsPropsType = {}

const MyPosts = (props: MyPostsPropsType) => {
    return <div className={s.myPosts}><h3>My posts</h3>
        <div>
            <textarea>New Post</textarea>
        </div>
        <div className={s.post}>
            <button>Add post</button>
        </div>
        <div className={'Posts'}>
            <Post message={'Hey, i\'m new post'} likesCount={5}/>
            <Post message={'How are you?'} likesCount={15}/>
        </div>
    </div>

}
export default MyPosts;