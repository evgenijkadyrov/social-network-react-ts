import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {InitialStateType, logout} from "../../redux/auther-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderContainerPropsType, InitialStateType> {
    render() {

        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        login: state.auther.login,
        isAuth: state.auther.isAuth
    }
}

export default connect<mapStateToPropsType,mapDispatchToPropsType,{},AppStateType >(mapStateToProps, {logout})(HeaderContainer);

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    logout: () => void
}