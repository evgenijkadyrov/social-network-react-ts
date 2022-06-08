import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateToProps = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        isAuth: state.auther.isAuth
    }
}
export function withAuthRedirect <T> (Component: ComponentType<T>)  {
    const RedirectComponent = (props: mapStateToProps) => {
        let {isAuth, ...restProps}=props
        if (!isAuth) return <Navigate to='/login'/>
        return <Component {...restProps as T} />
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
};

