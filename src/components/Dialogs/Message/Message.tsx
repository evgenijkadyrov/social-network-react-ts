import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    message:string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter Message'} name={'newMessageBody'} component="textarea"/>
            </div>

            <div>
                <button type="submit">Sent</button>
            </div>
        </form>

    );
};
export const AddMessageReduxForm = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
