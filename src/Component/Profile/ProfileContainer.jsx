import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {getStatus, setProfile, updateStatus} from "../../redux/profile-reducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loginUserId;
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.setProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return(
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatus={this.props.updateStatus}
            />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    loginUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {setProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
    )(ProfileContainer)