import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src='https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_960_720.png'/>

        </div>
        <div>
            ava+desc
        </div>
        <div>
            My posts

            <div>New Post</div>
            <div className={'Posts'}>
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>
                <div>post3</div>
            </div>

        </div>
    </div>
}
export default Profile;