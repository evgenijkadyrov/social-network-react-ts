import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./My Posts/Post/MyPostsContainer";



type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action:ActionsType)=>void

}


const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>

    </div>
}
export default Profile;