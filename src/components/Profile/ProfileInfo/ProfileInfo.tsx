import React from 'react';
import s from './ProfileInfo.module.css'



type ProfileInfoPropsType = {

}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    return <div >
        <div className={s.profile}>
            <img src='https://imgix.lifehacker.com.au/content/uploads/sites/4/2019/08/23/iia0lwkxmp8dv2tse9at-scaled.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=832'/>
        </div>
        <div className={s.ava}>
            ava+desc
        </div>


    </div>
}
export default ProfileInfo;