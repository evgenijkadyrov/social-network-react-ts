import React from 'react';
import {SettingOutlined, SmileOutlined} from '@ant-design/icons';
import { Button, notification } from 'antd';

export const NotificationDemoMode: React.FC = ({children}) => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            message: 'Notification Title',
            description:
            'This feature is under development. We apologize for the inconvenience.',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    return (
        <>
            {contextHolder}
            <Button type="text" onClick={openNotification} style={{padding:'0'}}>
                {children}
            </Button>
        </>
    );
};

