import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage:ProfilePageType
    addPost:()=>void
    updateNewPost:(newText:string)=>void

}


const Profile = (props: ProfilePropsType) => {

    return <div >
        <ProfileInfo />
        <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPost={props.updateNewPost}/>

    </div>
}
export default Profile;