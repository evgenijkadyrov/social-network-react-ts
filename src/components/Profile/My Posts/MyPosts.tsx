import React, {memo} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/profilePage-reducer";
import {AddNewPostReduxForm} from "./AddNewPost";


type MyPostsPropsType = {
    posts: PostType[]
    addPost: (newPostBody: string) => void

}

const MyPosts = memo((props: MyPostsPropsType) => {


    let addNewPost = (values: any) => {
        props.addPost(values.newPostBody)
    }
    let postElement = props.posts.map(el => <Post message={el.message}
                                                  likesCount={el.likesCount}/>)

    return <div className={s.myPosts}><h3>My posts</h3>

        <AddNewPostReduxForm onSubmit={addNewPost}/>
        <div className={'Posts'}>
            {postElement}

        </div>

    </div>

})


export default MyPosts;