import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {requiredField} from "../../utiles/validation/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auther-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from '../../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe?: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'} type={'password'} name={'password'} component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} validate={[requiredField]}/> Remember me
            </div>

                {props.error&&<div className={style.formLoginError}>{props.error} </div>}

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