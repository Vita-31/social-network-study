import React from "react";
import styles from './Users.module.css';
import {NavLink} from "react-router-dom";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {

    let userElement = props.userData.map(u => <UserItem name={u.name} id={u.id}/>)

    return (
        <div className={styles.users}>
            <div className={styles.search}>
                <p>Chats</p>
                <form>
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/search-2758901-2290828.png"/>
                    <input type='text' placeholder='Search chats..'/>
                </form>
            </div>
            {userElement}
        </div>
    );
}

export default Users;