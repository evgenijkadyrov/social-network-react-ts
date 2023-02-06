import React from 'react';
import TextArea from "antd/es/input/TextArea";
import {Button, Form} from "antd";
import {actions} from "../../../redux/profilePage-reducer";
import {useForm} from "antd/es/form/Form";

type NewPostType = {
    callback: (values: { newPostBody: string }) => void
    textAreaTitle:string
    buttonName:string
}
export const NewPostForm: React.FC<NewPostType> = ({callback,textAreaTitle,buttonName}) => {
const [form]=useForm()
    const onFinish = (values: { newPostBody: string }) => {
        callback(actions.addPost(values.newPostBody))
        form.resetFields()

    }
    return (

        <div>
            <Form
                form={form}
                name={'basic'}
                initialValues={{}}
                onFinish={onFinish}
            >
                <Form.Item label={textAreaTitle} name={'newPostBody'}  >
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'}  >{buttonName}</Button>
                </Form.Item>

            </Form>

        </div>
    )


};





