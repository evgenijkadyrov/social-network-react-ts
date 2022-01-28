import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";


type ProfilePropsType = {}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <div>
            <img src='https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_960_720.png'/>
        </div>
        <div>
            ava+desc
        </div>
        <MyPosts />

    </div>
}
export default Profile;