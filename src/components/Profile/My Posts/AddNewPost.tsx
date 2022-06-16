import React from 'react';
import s from "./MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";



type FormDataType={

}

export const AddNewPost:React.FC<InjectedFormProps<FormDataType>> = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field name={'newPostBody'} component={'textarea'} placeholder={'Type here'}></Field>
            </div>
            <div className={s.post}>
                <button  type={"submit"} className={s.addPost}>Add post</button>
            </div>
        </form>
    );
};

export const AddNewPostReduxForm=reduxForm<FormDataType>({
    form: 'profileAddPost'
})(AddNewPost)

