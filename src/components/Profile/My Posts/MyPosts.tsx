import React, {createRef, DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type MyPostsType = {
    id: number,
    message: string,
    likesCount: number
}
type MyPostsPropsType = {
    posts: Array<MyPostsType>
    addPost:(postMessage:string)=>void
}


const MyPosts = (props: MyPostsPropsType) => {
    let newPostMessage = createRef<HTMLTextAreaElement>()


    const onClickAddPost = () => {
        if (newPostMessage.current) {
            let postMessage = newPostMessage.current.value
            {
                props.addPost(postMessage)
            }
        }
    }

    let postElement = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)
    return <div className={s.myPosts}><h3>My posts</h3>
        <div>
            <textarea ref={newPostMessage} className={s.textareaProperty} placeholder="Type here..."></textarea>
        </div>
        <div className={s.post}>
            <button onClick={onClickAddPost} type={"button"} className={s.addPost}>Add post</button>
        </div>
        <div className={'Posts'}>
            {postElement}

        </div>

    </div>

}
export default MyPosts;