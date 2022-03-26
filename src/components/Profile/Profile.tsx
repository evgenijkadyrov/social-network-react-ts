import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";



type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action:ActionsType)=>void

}


const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>

    </div>
}
export default Profile;