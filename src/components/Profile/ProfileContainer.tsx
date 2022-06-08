import React, {JSXElementConstructor} from 'react';
import {useLocation, useNavigate, useParams,Navigate} from 'react-router-dom'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, initialStateType, setUserProfile} from "../../redux/profilePage-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


export type UserProfileContactType = {
    facebook: string
    website: string,
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type UserProfilePhotos = {
    small: string
    large: string
}
export type UserProfileType = {
    aboutMe: string
    contacts: UserProfileContactType
    lookingForAJob: boolean
    lookingForAJobDescription: boolean
    fullName: string
    userId: number
    photos: UserProfilePhotos
}

type mapStateToPropsType = {
    profile: UserProfileType | null

}
type mapDispatchToPropsType = {

    getProfile: (userId: number) => void
}


type PropsType = mapStateToPropsType & mapDispatchToPropsType


export class ProfileContainer extends React.Component<PropsType, initialStateType> {

    componentDidMount() {

//@ts-ignore
        let userID = this.props.params.userID;
        if (!userID) {
            userID = 13216
        }
        this.props.getProfile(userID)
    }

    render() {

        return <div>
            <Profile {...this.props} profile={this.props.profile}/>

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
    profile: state.profilePage.profile,

})
export default compose<React.ComponentType>(connect(mapStateToProps, { getProfile}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)

