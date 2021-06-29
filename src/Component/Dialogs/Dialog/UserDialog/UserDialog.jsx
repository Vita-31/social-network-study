import React from "react";
import styles from './UserDialog.module.css';
import UserDialogItem from "./UserDialogItem/UserDialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/InputControl/Input";
import {maxLengthCreator, required} from "../../../../Validation/validation/validation";

const UserDialog = (props) => {

    let state = props.dialogsPage;
    let messageUserItem = state.messagesItemUser.map(d => <UserDialogItem dialog={d.dialog} d={d.id}/>);
    let newMassage = state.newMessageText;
    {/*
        let addMessage = () => {
            props.addMessage()
        }

        let updateMessageText = (e) => {
            let body = e.target.value
            props.updateMessageText(body)
        }
    */}
    let sendMessage = (values) => {
        props.addMessage(values.addMessageBody)
    }

    if(!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={styles.userDialogInner}>
            <UserDialogFormRedux onSubmit={sendMessage} />
            {messageUserItem}
        </div>
    );
}

const maxLengthCreatorNum = maxLengthCreator(20)

const UserDialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.userDialog}>
            <div>
                <Field component={Textarea} name={'addMessageBody'} placeholder={'Enter your message'}
                       validate={[required, maxLengthCreatorNum]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const UserDialogFormRedux = reduxForm({form: 'addMessageBody'})(UserDialogForm)

export default UserDialog;