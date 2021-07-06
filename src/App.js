import React from "react";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import Sidebar from "./Component/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import FindUsersContainer from "./Component/FindUsers/FindUsersContainer";
import ProfileContainer from "./Component/Profile/ProfileContainer";
import Dialogs from "./Component/Dialogs/Dialogs";
import HeaderContainer from "./Component/Header/HeaderContainer";
import Login from "./Component/Login/Login";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./Component/Common/Preloader/Preloader";
import store from "./redux/redux-store";

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
                       <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
                        <Route path='/dialogs' render={() => <Dialogs/> } />
                        <Route path='/users' render={() => <FindUsersContainer/> } />
                        <Route path='/login' render={() => <Login/> }/>
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
