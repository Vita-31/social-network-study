import React from "react";
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <div className={styles.nav}>
            <NavLink activeClassName={styles.active} to='/posts'>
                Posts
            </NavLink>
            <NavLink activeClassName={styles.active} to='/pictures'>
                Pictures
            </NavLink>
            <NavLink to='/videos'>
                Videos
            </NavLink>
            <NavLink to='friends'>
                Friends
            </NavLink>
            <NavLink to='/about'>
                About me
            </NavLink>
        </div>
    );
}

export default Nav;