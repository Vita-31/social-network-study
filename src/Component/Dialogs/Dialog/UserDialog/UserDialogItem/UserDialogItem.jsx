import React from "react";
import styles from './UserDialogItem.module.css';

const UserDialogItem = (props) => {

    return (
       <div className={styles.dialogInner}>
           <div className={styles.itemDialog}>
               {props.dialog}
           </div>
       </div>
    );
}

export default UserDialogItem;