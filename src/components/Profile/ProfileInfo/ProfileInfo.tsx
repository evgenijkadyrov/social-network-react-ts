import React, {ChangeEvent, FC, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/preloader/Preloader";
import noimages from '../../../common/avatars/user.png'
import {ProfilePropsType} from "../Profile";
import {ProfileData} from "./ProfileData";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import {ProfileDataForm} from "./ProfileDataForm";
import road from '../../../common/image/road.jpg.webp'
import {Button} from "antd";
import {EditOutlined, InfoCircleOutlined} from '@ant-design/icons';
import addNewImageIcon from '../../../common/avatars/add-photo-icon.svg'

const ProfileInfo: FC<ProfilePropsType> = (props) => {
    const {profile, status, updateStatus, isOwner, saveProfile, savePhoto} = props
    const [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {

        if (event.target.files?.length) {
            savePhoto(event.target.files[0])
        }
    }

    const handleEditMode = () => {
        setEditMode(true)
    }
    const changeEditMode = (value: boolean) => {
        setEditMode(value)
    }
    return <div className={s.wrapperContainer}>
        <div className={s.profile}>
            <img
                src={road}/>
        </div>
        <div className={s.infoContainer}>

            <div className={s.editableAvatarWrapper}>
                <div className={s.avatar}>
                    {profile.photos.large ? <img src={profile.photos.large}/> :
                        <img src={noimages}/>}
                </div>
                {!isOwner && <div className={s.changePhoto}>
                    <label className={s.changePhoto_label}>
                        <input className={s.changePhoto_input}
                               onChange={onMainPhotoSelected} type="file"/>
                        <img className={s.changePhoto_icon} src={addNewImageIcon}
                             alt="new_photo"/>
                    </label>
                </div>}
            </div>

            <div className={s.mainInfoContainer}>
                <div className={s.fullName}><h2>{profile.fullName}</h2></div>
                <div className={s.status}>
                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                </div>
                <div className={s.lookingJob}> {profile.lookingForAJob?'Looking for a job':''}</div>

            </div>
            <div>{!isOwner &&
                <div>
                    <p style={{cursor:'pointer'}} onClick={handleEditMode}>{<EditOutlined/>} Edit profile</p>
                    <p style={{cursor:'pointer'}} onClick={handleEditMode}>{<InfoCircleOutlined />} More information</p>
                </div>}
            </div>

        </div>

        <div> {editMode ?
            <ProfileDataForm changeEditMode={changeEditMode} profile={profile}
                             saveProfile={saveProfile}/> :
            <ProfileData profile={profile}/>}
        </div>
    </div>

}
export default ProfileInfo;