import React from "react";
import {connect} from "react-redux";
import {
    follows, followSuccess, requestUsers,
    preloaderToggle,
    setTotalUsersCount,
    unfollow, unfollowSuccess
} from "../../redux/findUsers-reducer";
import FindUsers from "./FindUsers";
import Preloader from "../Common/Preloader/Preloader";
import {Redirect} from "react-router-dom"
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingToggle, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/findUsers-selectors";

class FindUsersContainer extends React.Component {

    componentDidMount() {

        this.props.requestUsers(this.props.currentPage, this.props.pageSize);

    }

    changePage = (pageNum) => {
        this.props.requestUsers(pageNum, this.props.pageSize);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingToggle: getFollowingToggle(state),
        isAuth: getIsAuth(state)
    }
}
export default compose(
    connect(mapStateToProps, {follows, unfollow, setTotalUsersCount, preloaderToggle, requestUsers, followSuccess, unfollowSuccess}),
    WithAuthRedirect
)(FindUsersContainer)
