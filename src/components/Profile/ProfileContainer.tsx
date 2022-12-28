import React, {JSXElementConstructor} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getStatus,
    initialStateType, savePhoto, saveProfile,
    updateStatus
} from "../../redux/profilePage-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


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
    small: string|null
    large: string|null
}
export type UserProfileType = EditUserProfileType&{

    userId: number
    photos: UserProfilePhotos
}
export type EditUserProfileType = {
    aboutMe: string
    contacts: {[key:string]:string}
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string

}

type mapStateToPropsType = {
    profile: UserProfileType | null
    status: string
    authorizedUserId: number | null,
    isAuth: boolean

}
type mapDispatchToPropsType = {

    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string | null) => void
    savePhoto:(file:File)=>void
    saveProfile:(profile:any)=>void
}


type PropsType = mapStateToPropsType & mapDispatchToPropsType


export class ProfileContainer extends React.Component<PropsType, initialStateType> {
    reloadUser() {
        //@ts-ignore
        let userID = this.props.params.userID;
        if (!userID) {

            userID = this.props.authorizedUserId
        }
        this.props.getProfile(userID)
        this.props.getStatus(userID)
    }

    componentDidMount() {
       this.reloadUser()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<initialStateType>, snapshot?: any) {
        //@ts-ignore
        if (this.props.params.userID !== prevProps.params.userID) {

            this.reloadUser()
        }

    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                // @ts-ignore
            isOwner={this.props.params.userID} saveProfile={this.props.saveProfile}/>

        </div>
    }
}

export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => props => {

    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
        <Component
            {...props}
            params={params}
            location={location}
            navigate={navigate}

        />
    );
}



let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    // @ts-ignore
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auther.id,
    isAuth: state.auther.isAuth



})
export default compose<React.ComponentType>(connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
    savePhoto,
    saveProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

