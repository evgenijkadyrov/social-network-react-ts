import React, {JSXElementConstructor} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePage-reducer";
import {AppStateType} from "../../redux/redux-store";

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
    setUserProfile: (profile: UserProfileType) => void
}


type PropsType = mapStateToPropsType & mapDispatchToPropsType


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

//@ts-ignore
        let userID = this.props.router.params.userID;
        console.log(userID)
        if (!userID) {
            userID=2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>

        </div>
    }
}

/*type withRouterType = {
    params:(userID:number)=>void
    navigate:()=>void
    location:()=>void

}*/

export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{params, location, navigate}}
            />
        );
    }

    return ComponentWithRouterProp;
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))