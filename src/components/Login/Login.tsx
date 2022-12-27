import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {FieldCreator, Input} from "../../common/FormsControls/FormsControls";
import {requiredField} from "../../utiles/validation/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auther-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from '../../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe?: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({
                                                                         handleSubmit,
                                                                         error
                                                                     }) => {

    return (

        <form onSubmit={handleSubmit}>
            {FieldCreator('Login', 'email',  {Input},  [requiredField])}
            {FieldCreator('Password', 'password',  {Input},  [requiredField], {type: 'password'})}
            {FieldCreator('', 'rememberMe',  {Input}, [], {type: 'checkbox'}, 'Remember me')}

            {error && <div className={style.formLoginError}>{error} </div>}

            <div>
                <button type="submit">Login</button>
            </div>
        </form>

    );
};
export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {

        return <Navigate to='/profile'/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auther.isAuth
})
export default connect(mapStateToProps, {login})(Login)