import React, {FC} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/Post/MyPostsContainer";
import {UserProfileType} from "./ProfileContainer";


const Profile:FC<ProfilePropsType> = (props) => {
    const {profile,status,updateStatus,isOwner,savePhoto,saveProfile}=props
    return <div>
        <ProfileInfo profile={profile} status={status}
                     updateStatus={updateStatus} isOwner={isOwner}
                     savePhoto={savePhoto} saveProfile={saveProfile}/>
        <MyPostsContainer/>

    </div>
}
export default Profile;

//types
export type ProfilePropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string | null) => void
    isOwner: number
    savePhoto: (file: File) => void
    saveProfile:(profile:any)=>void
}