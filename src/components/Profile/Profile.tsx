import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {

}


const Profile = (props: ProfilePropsType) => {
    return <div >
        <ProfileInfo />
        <MyPosts />

    </div>
}
export default Profile;