import React from "react";
import {addMessageActionCreator} from "../../../../redux/messages-reducer";
import UserDialog from "./UserDialog";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage(addMessageBody) {
            dispatch(addMessageActionCreator(addMessageBody))
        }

    }
    {/*
        updateMessageText(body)
        {
            dispatch(updateMessageText(body))
        }
    */}
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(UserDialog)
