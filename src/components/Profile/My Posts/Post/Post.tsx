import React, {FC} from 'react';
import s from './Post.module.css'
import post_avatar from '../../../../common/image/post_avatar.jpg'

export type PostPropsType = {
    message: string,
    likesCount: number
}
const Post:FC<PostPropsType> = (props) => {
    const {message,likesCount}=props
    return (
        <div className={s.item}><img
            src={post_avatar}/>
            {message}
            <div className={s.likes}>
                <span> Likes- {likesCount}</span>
            </div>
        </div>
    )
}
export default Post;