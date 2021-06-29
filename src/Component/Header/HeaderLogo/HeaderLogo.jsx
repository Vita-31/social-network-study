import React from "react";
import styles from './HeaderLogo.module.css'
import {NavLink} from "react-router-dom";

const HeaderLogo = () => {
    return (
        <NavLink to='/newsfeed'>
            <div className={styles.headerLogo}>
                <img src="http://wpkixx.com/html/socimo/images/logo.png" alt='Logo'/>
                <span>SocialWeb </span>
            </div>
        </NavLink>
    );
}

export default HeaderLogo;