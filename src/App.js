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
import {connect} from "react-redux";
import {getUserProfileData} from "./redux/auth-reducer";

class App extends React.Component{

    componentDidMount() {
        this.props.getUserProfileData()
    }

    render() {
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        );
    }


}

export default connect(null, {getUserProfileData} )(App);
