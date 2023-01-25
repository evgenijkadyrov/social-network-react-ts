import s from "./ProfileInfo.module.css";
import {Contact} from "./ProfileContact";
import React, {FC} from "react";
import {UserProfileType} from "../ProfileContainer";


export const ProfileData: FC<ProfileDataType> = (props) => {
    const {profile} = props
    return <div>
        <div><b>Full Name:</b> {profile.fullName}</div>
        <div>
            <div className={s.text_title}>About me:</div>
            <div>{profile.aboutMe}</div>
        </div>

        <div className={s.text_title}>Looking
            job:{profile.lookingForAJob ? 'yes' : 'no'}
            {profile.lookingForAJob && <div>My professional
                skills: {profile.lookingForAJobDescription}</div>}
        </div>

        <div className={s.text_title}>Contacts:
            {Object.keys(profile.contacts).map((key) => {
                return <Contact key={key} contactKey={key}
                                contactValue={profile.contacts[key]}/>
            })}

        </div>
    </div>

}
type ProfileDataType = {
    profile: UserProfileType
}