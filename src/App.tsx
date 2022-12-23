import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/preloader/Preloader";
import {initializedApp} from "./redux/app-reducer";


const DialogsContainer=React.lazy(()=>import('./components/Dialogs/DialogsContainer'))
const UsersContainer=React.lazy(()=>import('./components/Users/UsersContainer'))

class App extends React.Component<any> {
    componentDidMount() {
        this.props.initializedApp()

    }
    render() {
        if (!this.props.initialized){
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
                            /*  element={<ProfileContainer/>}/>*/
                               element={
                                   <Suspense fallback={<Preloader/>}>
                                       <UsersContainer/>
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

type mapStateToPropsType={
    initialized:boolean
}
const mapStateToProps=(state:AppStateType):mapStateToPropsType=>({
    initialized:state.app.initialized
})

type AppInitialisedType=mapStateToPropsType

export default connect(mapStateToProps, {initializedApp})(App); ;
