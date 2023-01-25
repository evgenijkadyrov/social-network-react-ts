import React, {FC, memo} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/profilePage-reducer";
import {AddNewPostReduxForm} from "./AddNewPost";



export type MapPropsType={
    posts: PostType[]
}
export type DispatchPropsType={
    addPost: (newPostBody: string) => void
}
export type AddNewPostPropsType ={
    newPostBody:string
}
const MyPosts: FC<MapPropsType&DispatchPropsType> = memo((props) => {
   const {addPost,posts}=props
    let addNewPost = (values: AddNewPostPropsType) => {
        addPost(values.newPostBody)
    }
    let postElement = posts.map(el => <Post
        key={el.id}
        message={el.message}
        likesCount={el.likesCount}/>)

    return <div className={s.myPosts}><h3>My posts</h3>

        <AddNewPostReduxForm onSubmit={addNewPost}/>
        <div className={'Posts'}>
            {postElement}

        </div>

    </div>

})
export default MyPosts;