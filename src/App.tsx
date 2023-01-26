import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/preloader/Preloader";
import {initializedApp} from "./redux/app-reducer";
import {Login} from "./components/Login/Login";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersPage = React.lazy(() => import('./components/Users/UsersPage'));

type MapPropsType=ReturnType<typeof mapStateToProps>
type MapDispatchPropsType={
    initializedApp:()=>void
}

class App extends React.Component<MapPropsType&MapDispatchPropsType> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile'
                               element={<ProfileContainer/>}/>
                        <Route path='/profile/:userID'
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
                                       <DialogsContainer/>
                                   </Suspense>
                               }/>
                        <Route path={'/news/*'} element={<News/>}/>
                        <Route path={'/music/*'} element={<Music/>}/>
                        <Route path={'/settings/*'} element={<Settings/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                    </Routes>

                </div>
            </div>

        )
    }
}


const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})



export default connect(mapStateToProps, {initializedApp})(App);

