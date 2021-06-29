import React from "react";
import {addPostActionCreation} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.post,
        newPostText: state.ProfilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addNewPost: (newPostBody) => {
            dispatch(addPostActionCreation(newPostBody));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;