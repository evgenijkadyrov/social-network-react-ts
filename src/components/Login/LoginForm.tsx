import React, {FC} from 'react';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auther-reducer";

type LoginFormType = {
    captchaUrl: string | null
}
export const LoginForm: FC<LoginFormType> = ({captchaUrl}) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {email: 'Email required'}
            }
            if (!values.password) {
                return {password: 'Password required'}
            }
        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: null
        },
        onSubmit: values => {
            dispatch(login(values.email, values.password, values.rememberMe, values.captcha))
        }
    })

    return <>
        <form onSubmit={formik.handleSubmit}>

            <input   {...formik.getFieldProps('email')}/>
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <input type="password" {...formik.getFieldProps('password')}/>
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            <input type={'checkbox'} {...formik.getFieldProps('rememberMe')}/>
            <button type={'submit'} color={'primary'}>
                Login
            </button>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <input {...formik.getFieldProps('captcha')} type={'text'}/>}

        </form>
    </>
}
