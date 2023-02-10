import React, {Suspense, useEffect, useState} from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/preloader/Preloader";
import {initializedApp} from "./redux/app-reducer";
import {Login} from "./components/Login/Login";
import 'antd/dist/reset.css';
import {
    CustomerServiceOutlined,
    EditOutlined,
    FileTextOutlined,
    MessageOutlined,
    ProfileOutlined,
    UserOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {Header} from "antd/es/layout/layout";
import {HeaderCustom} from "./components/Header/Header";

import {Messages} from "./components/Dialogs/Message/Messages";

const {  Content, Footer, Sider } = Layout;


const DialogsList = React.lazy(() => import('./components/Dialogs/DialogsList'));
const UsersPage = React.lazy(() => import('./components/Users/UsersPage'));

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to= {'profile'} >Profile</Link>, '1', <ProfileOutlined />),
    getItem(<Link to={'users'}>Users</Link>, '2', <UserOutlined />, ),
    getItem(<Link to={'dialogs'}>Message</Link>, '6', <MessageOutlined />),
    getItem(<Link  to={'news'}>News</Link>, '7', <FileTextOutlined />),
    getItem(<Link  to={'music'}>Music</Link>, '8', <CustomerServiceOutlined /> ),
    getItem(<Link  to={'settings'}>Settings</Link>, '9', <EditOutlined />),
];

export const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const initialized = useSelector<AppStateType>(state => state.app.initialized)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializedApp())
    })

    if (!initialized) {
        return <Preloader/>
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>

            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header className="header">
                    <div className="logo" ><HeaderCustom/></div>

                    {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}  />*/}
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }} >

                        <Breadcrumb.Item><Link to={'profile'}>Profile</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'users'}>Users</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={'dialogs'}>Messages</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        <div className={'app-wrapper-content'}>
                                     <Routes>
                                         <Route path='/' element={<ProfileContainer/>}/>
                                         <Route path='/profile'
                                                element={<ProfileContainer/>}/>
                                         <Route path='/profile/:userId'
                                                element={<ProfileContainer/>}/>
                                         <Route path='/users'
                                                element={
                                                   <Suspense fallback={<Preloader/>}>
                                                        <UsersPage/>
                                                    </Suspense>
                                                }/>
                                         <Route path={'/dialogs/*'}
                                                element={
                                                    <Suspense fallback={<Preloader/>}>
                                                        <DialogsList/>
                                                    </Suspense>
                                                }/>
                                         <Route path={'/dialogs/:userId'}
                                                element={
                                                    <Suspense fallback={<Preloader/>}>
                                                        <Messages/>
                                                    </Suspense>
                                                }/>
                                         <Route path={'/news/*'} element={<News/>}/>
                                         <Route path={'/music/*'} element={<Music/>}/>
                                         <Route path={'/settings/*'} element={<Settings/>}/>
                                         <Route path={'/login'} element={<Login/>}/>
                                     </Routes>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
           )


}



