import React from "react";
import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        userData: state.dialogsPage.userData
    }
}
let UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer;