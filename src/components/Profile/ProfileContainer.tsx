import React, {JSXElementConstructor} from 'react';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getStatus,
    initialStateType,
    savePhoto,
    saveProfile,
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

type mapStateToPropsType = {


    authorizedUserId: number | null,
    isAuth: boolean

}
type mapDispatchToPropsType = {

    getProfile: (userId: number|null) => void
    getStatus: (userId: number|null) => void
    updateStatus: (status: string | null) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: EditUserProfileType) => void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType & PathParamsType

type PathParamsType = {
    params: {
        userID: string
    }
}
export const ProfilePage=()=>{

}
export class ProfileContainer extends React.Component<PropsType, initialStateType> {
    reloadUser() {

        let userID: number | null = +this.props.params.userID;
        if (!userID) {

            userID = this.props.authorizedUserId
            if (!userID) {
                <Link to={'/login'}/>
            }
        }
        this.props.getProfile(userID)
        this.props.getStatus(userID)
    }

    componentDidMount() {
        this.reloadUser()
    }

    componentDidUpdate(prevProps: PropsType, prevState: initialStateType) {

        if (this.props.params.userID !== prevProps.params.userID) {

            this.reloadUser()
        }

    }

    render() {
        return <div>
            <Profile {...this.props}

                      savePhoto={this.props.savePhoto}

                     isOwner={+this.props.params.userID}
                     saveProfile={this.props.saveProfile}/>

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

