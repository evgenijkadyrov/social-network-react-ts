import React, {ChangeEvent, FC, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/preloader/Preloader";
import noimages from '../../../common/avatars/user.png'
import {ProfilePropsType} from "../Profile";
import ProfileStatus from "./ProfileStatus";
import {EditOutlined, InfoCircleOutlined} from '@ant-design/icons';
import addNewImageIcon from '../../../common/avatars/add-photo-icon.svg'
import {ModalProfileInfo} from "./ModalProfileInfo";

const ProfileInfo: FC<ProfilePropsType> = (props) => {
    const {profile, status, updateStatus, isOwner, saveProfile, savePhoto} = props
    const [editMode, setEditMode] = useState(false)
    const [showModal, setShowModal] = useState(false)
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
    const handleInfoMode = () => {
        setShowModal(true)
    }
    const closeInfoMode = () => {
        setShowModal(false)

    }
    const changeEditMode = (value: boolean) => {
        setEditMode(value)
    }

    return <div className={s.wrapperContainer}>
        {/*<div className={s.profile}>*/}
        {/*    <img*/}
        {/*        src={road}/>*/}
        {/*</div>*/}
        <div className={s.infoContainer}>

            <div className={s.editableAvatarWrapper}>
                <div className={s.avatar}>
                    {profile.photos.large ? <img src={profile.photos.large} alt={'avatar'}/> :
                        <img src={noimages} alt={'avatar'}/>}
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
                    <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                </div>
                <div
                    className={s.lookingJob}> {profile.lookingForAJob ? 'Looking for a job' : ''}</div>

            </div>
            <div>
                <p style={{cursor: 'pointer'}} onClick={handleInfoMode}>{
                    <InfoCircleOutlined/>} More information</p>

                <div>
                    {!isOwner && <p style={{cursor: 'pointer'}} onClick={handleEditMode}>{
                        <EditOutlined/>} Edit profile</p>}

                    <ModalProfileInfo showModalWindow={showModal}
                                      callbackOk={closeInfoMode} profile={profile}
                                      saveProfile={saveProfile}
                                      changeEditMode={changeEditMode}
                                      editMode={editMode}/>
                </div>
            </div>

        </div>

        {/*<div> {editMode ?*/}
        {/*    <ProfileDataForm changeEditMode={changeEditMode} profile={profile}*/}
        {/*                     saveProfile={saveProfile}/> :*/}
        {/*    <ProfileData profile={profile}/>}*/}
        {/*</div>*/}
    </div>

}
export default ProfileInfo;