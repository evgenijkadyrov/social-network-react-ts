import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs, dialogsType, messagesType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {MyPostsType} from "./components/Profile/My Posts/MyPosts";
import {RootType} from "./redux/state";

type AppPropsType={
    state:RootType
}

const App = (props:AppPropsType) => {

    return (<BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/' element={<Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path='/profile/*' element={<Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path={'/news/*'} element={<News/>}/>
                    <Route path={'/music/*'} element={<Music/>}/>
                    <Route path={'/settings/*'} element={<Settings/>}/>
                </Routes>

            </div>
        </div>

    </BrowserRouter>)
}

export default App;
