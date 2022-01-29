import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string,
    likesCount: number
}
const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}><img
            src={'https://thumbs.dreamstime.com/z/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg'}/>
            {props.message}
            <div className={s.likes}>
                <span> Likes- {props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;