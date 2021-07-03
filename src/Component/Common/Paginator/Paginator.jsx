import React from "react";
import styles from '../../FindUsers/FindUsers.module.css'
import userPhoto from "../../../images/images.jpg";
import {NavLink} from "react-router-dom";

let Paginator = (props) => {

    let totalCountPages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= totalCountPages; i++) {
        pages.push(i);
    }


    return (
        pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                         onClick={() => {
                         props.changePage(p);
                         }}>{p}</span>
        })
    )
}

export default Paginator;