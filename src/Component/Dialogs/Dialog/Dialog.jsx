import React from "react";
import styles from './Dialog.module.css'
import UserDialogContainer from "./UserDialog/UserDialogContainer";


const Dialog = (props) => {


    {/*let messageItem = props.messagesData.map(m => <Itemdialog message={m.message}/>)*/}

    return (

        <div className={styles.dialog}>
            <UserDialogContainer store={props.store}/>
            {/*{messageItem}*/}
        </div>
    );
}

export default Dialog;