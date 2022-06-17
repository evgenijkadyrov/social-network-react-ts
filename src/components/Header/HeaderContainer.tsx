import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, getAuthUserData} from "../../redux/auther-reducer";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, InitialStateType> {
    componentDidMount() {
        this.props.getAuthUserData()

    }

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

    getAuthUserData: () => void
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);