import React from "react";
import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import UsersContainer from "./Users/UsersContainer";


const Dialogs = (props) => {
    return(
        <div className={styles.dialogs}>
            <UsersContainer/>
            <Dialog/>
        </div>
    );
}

export default Dialogs;