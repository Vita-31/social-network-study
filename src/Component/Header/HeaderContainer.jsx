import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserProfileData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends  React.Component{


    render() {

        return (
                <Header {...this.props}
                        isAuth={this.props.isAuth}
                        login={this.props.login}
                        logout={this.props.logout}
                />
        );
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getUserProfileData, logout})(HeaderContainer);