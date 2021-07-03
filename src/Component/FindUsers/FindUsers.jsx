import React from "react";
import styles from './FindUsers.module.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let FindUsers = (props) => {

    return (

        <div className={styles.usersInner}>
            <Paginator currentPage={props.currentPage} changePage={props.changePage}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
            />
            {
                props.users.map( u => <User users={u} key={u.id}
                                            followingToggle={props.followingToggle}
                                            unfollowSuccess={props.unfollowSuccess}
                                            followSuccess={props.followSuccess}
                />)
            }
        </div>
    )
}

export default FindUsers;