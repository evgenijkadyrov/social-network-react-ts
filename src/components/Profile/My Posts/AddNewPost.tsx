import React from 'react';
import s from "./MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxlengthCreator, requiredField} from "../../../utiles/validation/validators";
import {TextArea} from "../../../common/FormsControls/FormsControls";
import {AddNewPostPropsType} from "./MyPosts";

let maxLength10=maxlengthCreator(10)
export const AddNewPost:React.FC<InjectedFormProps<AddNewPostPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field name={'newPostBody'} component={TextArea} placeholder={'Type here'} validate={[requiredField,maxLength10]}></Field>
            </div>
            <div className={s.post}>
                <button  type={"submit"} className={s.addPost}>Add post</button>
            </div>
        </form>
    );
};

export const AddNewPostReduxForm=reduxForm<AddNewPostPropsType>({
    form: 'profileAddPost'
})(AddNewPost)



