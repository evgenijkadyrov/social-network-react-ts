import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../../redux/auther-reducer";
import {Button, Checkbox, Col, Form, Input, Row, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import s from './Login.module.css'

type LoginFormType = {
    captchaUrl: string | null
}
type valuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null

}
const {Title} = Typography;
export const LoginForm: FC<LoginFormType> = ({captchaUrl}) => {

    const dispatch = useDispatch()

    const onFinish = (values: valuesType) => {
        dispatch(login(values.email, values.password, values.rememberMe, values.captcha))
    }

    return <div className={s.loginForm}>
        <Title level={3} className={s.title}>Welcome to Social network</Title>
        <Form
            className={s.container}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                captcha: null
            }}
            onFinish={onFinish}
            onFinishFailed={() => alert('Some error')}
            autoComplete="on"
        >
            <Form.Item
                label="Username"
                name="email"
                rules={[{required: true, message: 'Please input your email!'}]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"

                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}/>
            </Form.Item>

            <Form.Item name="rememberMe" valuePropName="checked"
                       wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>

                {captchaUrl && <Form.Item label="Captcha"
                                          extra="We must make sure that your are a human.">
                    <Row gutter={8}>
                        <Col span={12}>
                            <img src={captchaUrl} alt={'captcha'}/>
                            <Form.Item
                                name="captcha"
                                noStyle
                                rules={[{
                                    required: true,
                                    message: 'Please input the captcha you got!'
                                }]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>

                    </Row>
                </Form.Item>}

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>


        </Form>
        <h3>You  can use test account</h3>
        <p>Email: free@samuraijs.com</p>

            <p>Password: free</p>
    </div>
}
