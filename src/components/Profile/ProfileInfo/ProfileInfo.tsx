import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/preloader/Preloader";
import noimages from '../../../common/avatars/user.png'
import {ProfilePropsType} from "../Profile";
import {ProfileData} from "./ProfileData";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import {ProfileDataForm} from "./ProfileDataForm";


const ProfileInfo = (props: ProfilePropsType) => {
    const {profile, status, updateStatus, isOwner,saveProfile} = props
    const [editMode,setEditMode]=useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const savePhoto = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            props.savePhoto(event.target.files[0])
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
                src='https://imgix.lifehacker.com.au/content/uploads/sites/4/2019/08/23/iia0lwkxmp8dv2tse9at-scaled.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=832'/>
        </div>
        <div>
            {!isOwner && <input type='file' onChange={savePhoto}/>}
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