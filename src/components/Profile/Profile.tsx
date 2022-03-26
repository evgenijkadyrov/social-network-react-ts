import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import MyPostsContainer from "./My Posts/Post/MyPostsContainer";


type ProfilePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>

    </div>
}
export default Profile;