import React, {FC} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";
import {UserProfileType} from "./ProfileContainer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {updateStatus} from "../../redux/profilePage-reducer";
import s from './Profile.module.css'


const Profile: FC<ProfilePagePropsType> = (props) => {
    const {isOwner, savePhoto, saveProfile} = props

    const status = useSelector<AppStateType, string>(state => state.profilePage.status)
    const profile = useSelector<AppStateType, UserProfileType | null>(state => state.profilePage.profile)

    const updateProfileStatus = (status: string) => {
        updateStatus(status)
    }
    return <div className={s.container}>
        <div className={s.profileInfo}>
            <ProfileInfo  profile={profile} status={status}
                           updateStatus={updateProfileStatus} isOwner={isOwner}
                           savePhoto={savePhoto} saveProfile={saveProfile}/>
        </div>
        <div className={s.myPostsContainer}> <MyPostsContainer/></div>



    </div>
}
export default Profile;

//types
export type ProfilePagePropsType = {

    isOwner: number
    savePhoto: (file: File) => void
    saveProfile: (profile: any) => void
}
export type ProfilePropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: number
    savePhoto: (file: File) => void
    saveProfile: (profile: any) => void
}