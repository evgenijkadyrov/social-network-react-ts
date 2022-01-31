import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
posts:{id:number, message:string, likesCount:number}[]
}


const Profile = (props: ProfilePropsType) => {

    return <div >
        <ProfileInfo />
        <MyPosts posts={props.posts}/>

    </div>
}
export default Profile;