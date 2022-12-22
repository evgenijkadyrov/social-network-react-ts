import React from 'react';
import s from '../Profile.module.css'
import {Preloader} from "../../../common/preloader/Preloader";
import {UserProfileType} from "../ProfileContainer";
import looking_job from '../../../common/image/man.png'
import noimages from '../../../common/avatars/user.png'
import ProfileStatusWithHook from "./ProfileStatusWithHook";

type ProfileInfoPropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string | null) => void
}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    const {profile, status, updateStatus} = props
    if (!profile) {
        return <Preloader/>
    }
    return <div>
        <div className={s.profile}>
            <img
                src='https://imgix.lifehacker.com.au/content/uploads/sites/4/2019/08/23/iia0lwkxmp8dv2tse9at-scaled.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=832'/>
        </div>
        <div className={s.ava}>
            {profile.photos.large ? <img src={profile.photos.large}/> :
                <img src={noimages}/>}
            <h3>{profile.fullName}</h3>

            <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>

            <div className={s.text_title}>About me:</div>
            <div>{profile.aboutMe}</div>
            {profile.lookingForAJob && <div className={s.text_title}>Looking job:
                <div>{profile.lookingForAJobDescription}</div>
                <div><img src={looking_job}/></div>
            </div>}
            <div className={s.text_title}>Contacts:
                <ul>
                    {profile.contacts.facebook &&
                        <li><a href={'#'}>{profile.contacts.facebook}</a></li>}
                    {profile.contacts.github &&
                        <li><a href={'#'}>{profile.contacts.github}</a></li>}
                    {profile.contacts.website &&
                        <li><a href={'#'}>{profile.contacts.website}</a></li>}
                    {profile.contacts.instagram &&
                        <li><a href={'#'}>{profile.contacts.instagram}</a></li>}


                </ul></div>
        </div>


    </div>
}
export default ProfileInfo;