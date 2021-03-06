import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, getAuthUserData, logout} from "../../redux/auther-reducer";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, InitialStateType> {


    render() {

        //@ts-ignore
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean

}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        login: state.auther.login,
        isAuth: state.auther.isAuth
    }
}
type mapDispatchToPropsType = {


    logout:()=>void
}

export default connect(mapStateToProps, {logout})(HeaderContainer);