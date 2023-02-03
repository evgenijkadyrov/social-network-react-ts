import React, {FC, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {
    getProfile,
    getStatus,
    savePhoto,
    saveProfile
} from "../../redux/profilePage-reducer";
import {AppStateType} from "../../redux/redux-store";
import s from './ProfileContainer.module.css'

export type UserProfileContactType = {
    "facebook": string
    "website": string,
    "vk": string
    "twitter": string
    "instagram": string
    "youtube": string
    "github": string
    "mainLink": string
}
export type UserProfilePhotos = {
    small: string | null
    large: string | null
}
export type UserProfileType = EditUserProfileType & {

    userId: number
    photos: UserProfilePhotos
}
export type EditUserProfileType = {
    aboutMe: string
    contacts: { [key: string]: string }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string

}

export const ProfileContainer: FC = () => {
    let {userId}: any = useParams()

    const dispatch = useDispatch()
    const authorizedUserId = useSelector<AppStateType>(state => state.auther.id)
    useEffect(() => {
        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                <Link to={'/login'}/>
            }
        }

    }, [userId])
    useEffect(() => {
        dispatch(getProfile(userId))
        dispatch(getStatus(userId))
    }, [userId])
    const saveUserPhoto = (file: File) => {
        dispatch(savePhoto(file))
    }
    const saveUserProfile = (profile: UserProfileType) => {
        dispatch(saveProfile(profile))
    }
    return (
        <div className={s.container}>
            <Profile
                savePhoto={saveUserPhoto}
                isOwner={+userId}
                saveProfile={saveUserProfile}/>

        </div>
    )
}
// export class ProfileContainer2 extends React.Component<PropsType, initialStateType> {
//     reloadUser() {
//
//         let userID: number | null = +this.props.params.userID;
//         if (!userID) {
//
//             userID = this.props.authorizedUserId
//             if (!userID) {
//                 <Link to={'/login'}/>
//             }
//         }
//         this.props.getProfile(userID)
//         this.props.getStatus(userID)
//     }
//
//     componentDidMount() {
//         this.reloadUser()
//     }
//
//     componentDidUpdate(prevProps: PropsType, prevState: initialStateType) {
//
//         if (this.props.params.userID !== prevProps.params.userID) {
//
//             this.reloadUser()
//         }
//
//     }
//
//     render() {
//         return <div>
//             <Profile {...this.props}
//
//                       savePhoto={this.props.savePhoto}
//
//                      isOwner={+this.props.params.userID}
//                      saveProfile={this.props.saveProfile}/>
//
//         </div>
//     }
// }

// export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => props => {
//
//     const location = useLocation();
//     const navigate = useNavigate();
//     const params = useParams();
//     return (
//         <Component
//             {...props}
//             params={params}
//             location={location}
//             navigate={navigate}
//
//         />
//     );
// }


// let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
//
//     authorizedUserId: state.auther.id,
//     isAuth: state.auther.isAuth
//
//
// })
// export default compose<React.ComponentType>(connect(mapStateToProps, {
//         getProfile,
//         getStatus,
//         updateStatus,
//         savePhoto,
//         saveProfile
//     }),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer)

