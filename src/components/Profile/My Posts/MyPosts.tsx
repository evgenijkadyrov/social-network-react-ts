import React, {ChangeEvent, createRef, DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType, ProfilePageType,} from "../../../redux/store";
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../redux/profilePage-reducer";

export type MyPostsType = {
    id: number,
    message: string,
    likesCount: number
}
type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action:ActionsType)=>void
}

const MyPosts = (props: MyPostsPropsType) => {
    let newPostMessage = createRef<HTMLTextAreaElement>()

    const onClickAddPost = () => {
        if (newPostMessage.current) {
            props.dispatch(addPostActionCreator())
        }

    }
    const onChangeUpdateText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
                props.dispatch(UpdateNewPostActionCreator(newText))
    }


    let postElement = props.profilePage.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)
    return <div className={s.myPosts}><h3>My posts</h3>
        <div>
            <textarea value={props.profilePage.newTextPost} onChange={onChangeUpdateText} ref={newPostMessage}
                      className={s.textareaProperty}
                      placeholder="Type here..."></textarea>
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