import React from "react";
import {useForm} from "antd/es/form/Form";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Form} from "antd";
import TextArea from "antd/es/input/TextArea";

export type NewMessageType = {
    callback: (newPostBody: string) => void
    textAreaTitle: string
    buttonName: string
}
export const NewMessageForm: React.FC<NewMessageType> = ({
                                                             callback,
                                                             textAreaTitle,
                                                             buttonName
                                                         }) => {
    const [form] = useForm()

    const onFinish = (values: { newPostBody: string }) => {
        callback(values.newPostBody)
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
                <Form.Item label={textAreaTitle} name={'newPostBody'}>
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'}>{buttonName}</Button>
                </Form.Item>

            </Form>

        </div>
    )
};