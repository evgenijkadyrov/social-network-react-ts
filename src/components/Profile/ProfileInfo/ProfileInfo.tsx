import React from 'react';
import s from './ProfileInfo.module.css'
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
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div className={s.profile}>
            <img
                src='https://imgix.lifehacker.com.au/content/uploads/sites/4/2019/08/23/iia0lwkxmp8dv2tse9at-scaled.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=832'/>
        </div>
        <div className={s.ava}>
            {props.profile.photos.large ? <img src={props.profile.photos.large}/> : <img src={noimages}/>}
            <h3>{props.profile.fullName}</h3>

            <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>

            <div className={s.text_title}>About me:</div>
            <div>{props.profile.aboutMe}</div>
            {props.profile.lookingForAJob && <div className={s.text_title}>Looking job:
                <div>{props.profile.lookingForAJobDescription}</div>
                <div><img src={looking_job}/></div>
            </div>}
            <div className={s.text_title}>Contacts:
                <ul>
                    {props.profile.contacts.facebook && <li><a href={'#'}>{props.profile.contacts.facebook}</a></li>}
                    {props.profile.contacts.github && <li><a href={'#'}>{props.profile.contacts.github}</a></li>}
                    {props.profile.contacts.website && <li><a href={'#'}>{props.profile.contacts.website}</a></li>}
                    {props.profile.contacts.instagram && <li><a href={'#'}>{props.profile.contacts.instagram}</a></li>}


                </ul></div>
        </div>


    </div>
}
export default ProfileInfo;