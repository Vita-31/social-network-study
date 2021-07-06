import React from "react";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import Sidebar from "./Component/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./Component/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./Component/Common/Preloader/Preloader";
import store from "./redux/redux-store";
const ProfileContainer = React.lazy( () => import("./Component/Profile/ProfileContainer"));
const Dialogs = React.lazy( () => import("./Component/Dialogs/Dialogs"));
const FindUsersContainer = React.lazy( () => import("./Component/FindUsers/FindUsersContainer"));
const Login = React.lazy( () => import("./Component/Login/Login"));


class App extends React.Component{

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {

        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    < Navbar/>
                    <div className='inner'>
                        <Sidebar/>
                        <Route path='/profile/:userId?' render={() => {
                            return  <React.Suspense fallback={<Preloader/>}>
                                        <ProfileContainer/>
                                    </React.Suspense>
                        }} />
                        <Route path='/dialogs' render={() => {
                             return  <React.Suspense fallback={<Preloader/>}>
                                        <Dialogs/>
                                    </React.Suspense>
                        }} />
                        <Route path='/users' render={() => {
                             return  <React.Suspense fallback={<Preloader/>}>
                                        <FindUsersContainer/>
                                    </React.Suspense>
                        }} />
                        <Route path='/login' render={() => {
                             return  <React.Suspense fallback={<Preloader/>}>
                                        <Login/> 
                                    </React.Suspense>
                        }}/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appPage.initialized
})

let AppContainer = connect(mapStateToProps,{initializedApp} )(App);

const SocialApp = (props) => {
    return  <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
}
export default SocialApp;
