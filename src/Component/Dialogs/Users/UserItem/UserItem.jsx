import {NavLink} from "react-router-dom";
import styles from './UserItem.module.css'
import React from "react";

const UserItem = (props) => {

    let path = '/dialogs/dialog/'+ props.id;

    return (
        <div>
            <NavLink activeClassName={styles.active} to={path}>
                <div className={styles.user} >
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}
export default UserItem;