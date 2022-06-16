import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {initialStateType} from "../../../redux/profilePage-reducer";
import {AddNewPostReduxForm} from "./AddNewPost";


type MyPostsPropsType = {
    profilePage: initialStateType
    addPost: (newPostBody: any) => void

}

const MyPosts = (props: MyPostsPropsType) => {
    /* let newPostMessage = createRef<HTMLTextAreaElement>()

     const onClickAddPost = () => {
         props.addPost()
     }


     const onChangeUpdateText = (e: ChangeEvent<HTMLTextAreaElement>) => {

         let newText = e.currentTarget.value
         props.updateNewPostText(newText)

     }*/
    let addNewPost = (values: any) => {

        props.addPost(values.newPostBody)
    }
    let postElement = props.profilePage.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)
    return <div className={s.myPosts}><h3>My posts</h3>

        <AddNewPostReduxForm onSubmit={addNewPost}/>
        <div className={'Posts'}>
            {postElement}

        </div>

    </div>

}


export default MyPosts;