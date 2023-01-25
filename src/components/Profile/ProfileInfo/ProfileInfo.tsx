import React, {ChangeEvent, FC, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/preloader/Preloader";
import noimages from '../../../common/avatars/user.png'
import {ProfilePropsType} from "../Profile";
import {ProfileData} from "./ProfileData";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import {ProfileDataForm} from "./ProfileDataForm";
import road from '../../../common/image/road.jpg.webp'


const ProfileInfo:FC<ProfilePropsType> = (props) => {
    const {profile, status, updateStatus, isOwner,saveProfile,savePhoto} = props
    const [editMode,setEditMode]=useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            savePhoto(event.target.files[0])
        }

    }
    const handleEditMode=()=>{
        setEditMode(true)
    }
const changeEditMode=(value:boolean)=>{
        setEditMode(value)
}
    return <div>
        <div className={s.profile}>
            <img
                src={road}/>
        </div>
        <div>
            {!isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
        </div>
        <div className={s.ava}>
            {profile.photos.large ? <img src={profile.photos.large}/> :
                <img src={noimages}/>}
        </div>
        {!isOwner && <button onClick={handleEditMode}>Edit profile</button>}
        <div><b>Status:</b>

            <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
        </div>
        {editMode ? <ProfileDataForm changeEditMode={changeEditMode} profile={profile} saveProfile={saveProfile}/>: <ProfileData profile={profile} />}
    </div>
}
export default ProfileInfo;