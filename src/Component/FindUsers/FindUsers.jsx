import React from "react";
import styles from './FindUsers.module.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let FindUsers = (props) => {



    return (
        <div className={styles.usersInner}>
            {
                props.users.map( u => <User users={u} key={u.id}
                                            followingToggle={props.followingToggle}
                                            unfollowSuccess={props.unfollowSuccess}
                                            followSuccess={props.followSuccess}
                />)
            }
            <div>
                <Paginator currentPage={props.currentPage} changePage={props.changePage}
                        totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                />
            </div>
        </div>
    )
}

export default FindUsers;