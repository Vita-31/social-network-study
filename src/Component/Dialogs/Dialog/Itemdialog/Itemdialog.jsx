import React from "react";
import styles from './Itemdialog.module.css'
import {NavLink} from "react-router-dom";

const Itemdialog = (props) => {

    return (
        <div>
            <div className={styles.itemDialog}>
                <p>{props.message}</p>
            </div>
        </div>
    );

}

export  default Itemdialog;