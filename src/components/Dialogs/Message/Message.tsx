import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../../../common/FormsControls/FormsControls";
import {maxlengthCreator, requiredField} from "../../../utiles/validation/validators";

export type FormDataType = {
    message:string
}
const maxLength100=maxlengthCreator(100)
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter Message'} name={'newMessageBody'} component={TextArea}
                validate={[requiredField, maxLength100]}/>
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
