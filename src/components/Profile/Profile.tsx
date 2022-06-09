import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/Post/MyPostsContainer";
import {UserProfileType} from "./ProfileContainer";


type ProfilePropsType = {
profile:UserProfileType|null
    status:string
    updateStatus:(status:string|null)=>void
}
const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />

    </div>
}
export default Profile;