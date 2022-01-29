import React from 'react';
import s from './ProfileInfo.module.css'



type ProfileInfoPropsType = {

}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    return <div >
        <div className={s.profile}>
            <img src='https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_960_720.png'/>
        </div>
        <div className={s.ava}>
            ava+desc
        </div>


    </div>
}
export default ProfileInfo;