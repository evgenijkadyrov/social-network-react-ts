import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/Post/MyPostsContainer";
import {UserProfileType} from "./ProfileContainer";


type ProfilePropsType = {
profile:UserProfileType|null
}
const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />

    </div>
}
export default Profile;