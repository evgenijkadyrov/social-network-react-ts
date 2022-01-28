import React from 'react';
import s from './Post.module.css'

type PostPropsType = {}
const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}><img
            src={'https://thumbs.dreamstime.com/z/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg'}/>
            post1
            <div>
                <span> Like</span>
            </div>
        </div>
    )
}
export default Post;