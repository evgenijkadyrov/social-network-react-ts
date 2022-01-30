import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type MyPostsPropsType = {}

const MyPosts = (props: MyPostsPropsType) => {
    let PostData=[
        {id:1, message:'Hey, i\'m new post', likesCount:9},
        {id:2, message: 'How are you?', likesCount:15},
        {id:3, message: 'You win lottery', likesCount:99}
    ]
    return <div className={s.myPosts}><h3>My posts</h3>
        <div>
            <textarea className={s.textareaProperty} placeholder="Type here..." ></textarea>
        </div>
        <div className={s.post}>
            <button type={"button"} className={s.addPost}>Add post</button>
        </div>
        <div className={'Posts'}>
            <Post message={PostData[0].message} likesCount={PostData[0].likesCount}/>
            <Post message={PostData[1].message} likesCount={PostData[1].likesCount}/>
            <Post message={PostData[2].message} likesCount={PostData[2].likesCount}/>
        </div>

    </div>

}
export default MyPosts;