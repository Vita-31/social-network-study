import React from "react";
import {connect} from "react-redux";
import {
    follows, followSuccess, getUsers,
    preloaderToggle,
    setTotalUsersCount,
    unfollow, unfollowSuccess
} from "../../redux/findUsers-reducer";
import FindUsers from "./FindUsers";
import Preloader from "../Common/Preloader";
import {Redirect} from "react-router-dom"
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class FindUsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    changePage = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'} />
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <FindUsers totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           changePage={this.changePage}
                           unfollow={this.props.unfollow}
                           follow={this.props.follows}
                           users={this.props.users}
                           followingToggle={this.props.followingToggle}
                           progressToggle={this.props.progressToggle}
                           followSuccess={this.props.followSuccess}
                           unfollowSuccess={this.props.unfollowSuccess}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingToggle: state.UsersPage.followingToggle,
        isAuth: state.auth.isAuth
    }
}
export default compose(
    connect(mapStateToProps, {follows, unfollow, setTotalUsersCount, preloaderToggle, getUsers, followSuccess, unfollowSuccess}),
    WithAuthRedirect
)(FindUsersContainer)
