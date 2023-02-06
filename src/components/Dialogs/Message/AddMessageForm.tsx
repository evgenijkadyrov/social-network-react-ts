import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../../../common/FormsControls/FormsControls";
import {maxlengthCreator, requiredField} from "../../../utiles/validation/validators";
import {NewPostForm} from "../../Profile/My Posts/NewPostForm";
import {Button} from "antd";
import s from './AddMessageForm.module.css'
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/dialogs-reducer";

export type FormDataType = {

}
const maxLength100=maxlengthCreator(100)
export const AddMessageForm: React.FC = (props) => {
    const dispatch=useDispatch()
    const sentMessage = (values: { newPostBody: string }) => {
        dispatch(actions.addAnswer(values.newPostBody))

    }
    return (<div className={s.container}>
            <NewPostForm callback={sentMessage} textAreaTitle={''} buttonName={'Sent message'} />

    </div>


    );
};

