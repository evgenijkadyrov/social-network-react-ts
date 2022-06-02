import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, setUserData} from "../../redux/auther-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType,InitialStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id, login, email)

                }
            })
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
    setUserData: (id: number, login: string, email: string) => void
}
//@ts-ignore
export default connect(mapStateToProps, {setUserData})(HeaderContainer);