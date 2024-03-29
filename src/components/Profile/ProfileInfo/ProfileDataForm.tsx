import React, {FC} from 'react'
import {useFormik} from "formik";
import s from "./ProfileInfo.module.css";
import {EditUserProfileType, UserProfileType} from "../ProfileContainer";
import {Button} from "antd";

export const ProfileDataForm: FC<ProfileDataForm> = (props) => {
    const {saveProfile, profile, changeEditMode} = props

    const formik = useFormik({

        validate: (values) => {
            if (!values.fullName) {
                return {fullName: 'FullName required'}
            }
            if (!values.lookingForAJobDescription) {
                return {lookingForAJobDescription: 'LookingForAJobDescription required'}
            }
            if (!values.contacts) {
                return {contacts: 'Contacts required'}
            }
        },
        initialValues: {

            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: profile.contacts

        },
        onSubmit: values => {
            saveProfile(values)
            changeEditMode(false)

            //  dispatch(LoginA(values))
        }
    })


    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div><b>Full Name:</b>
                <input {...formik.getFieldProps('fullName')}/></div>

            <div>
                <div className={s.text_title}>About me:</div>
                <div>
                    <input {...formik.getFieldProps('aboutMe')}/></div>
            </div>

            <div className={s.text_title}>Looking
                job:
                <input type={'checkbox'} {...formik.getFieldProps('lookingForAJob')}/>
                <div>My professional
                    skills: <input {...formik.getFieldProps('lookingForAJobDescription')}/>
                </div>
            </div>
            <div className={s.text_title}>Contacts:
                {Object.keys(profile.contacts).map((key) => {

                    return <div key={key}><b>{key}:</b>
                        <input
                            placeholder={key} {...formik.getFieldProps('contacts.' + key)}
                        />
                    </div>
                })}

            </div>

            <Button htmlType={'submit'} type={'primary'}>Save</Button>
        </form>
    </div>
}

type ProfileDataForm = {
    saveProfile: (profile: EditUserProfileType) => void
    profile: UserProfileType
    changeEditMode: (value: boolean) => void
}