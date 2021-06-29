import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <NavLink to='/newsfeed'>
                <div className={styles.navbarElem+ ' ' +styles.active}>
                    <svg className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2"
                         stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                    <div className={styles.sub}>
                        <span>
                            Newsfeed
                        </span>
                    </div>
                </div>
            </NavLink>
            <NavLink to='/videos'>
                <div className={styles.navbarElem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-youtube">
                        <path
                            d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                    <div className={styles.sub}>
                        <span>
                            Videos
                        </span>
                    </div>
                </div>
            </NavLink>
            <NavLink to='/courses'>
                <div className={styles.navbarElem}>
                    <svg className="feather feather-airplay" strokeLinejoin="round" strokeLinecap="round"
                         strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                        <polygon points="12 15 17 21 7 21 12 15"></polygon>
                    </svg>
                    <div className={styles.sub}>
                        <span>
                            Courses
                        </span>
                    </div>
                </div>
            </NavLink>
            <NavLink to='/books'>
                <div className={styles.navbarElem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-book">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    <div className={styles.sub}>
                        <span>
                            Books
                        </span>
                    </div>
                </div>
            </NavLink>
            <NavLink to='/blogs'>
                <div className={styles.navbarElem}>
                    <svg className="feather feather-layout" strokeLinejoin="round" strokeLinecap="round"
                         strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect ry="2" rx="2" height="18" width="18" y="3" x="3"></rect>
                        <line y2="9" x2="21" y1="9" x1="3"></line>
                        <line y2="9" x2="9" y1="21" x1="9"></line>
                    </svg>
                    <div className={styles.sub}>
                        <span>
                            Blogs
                        </span>
                    </div>
                </div>
            </NavLink>
            <NavLink to='/groups'>
                <div className={styles.navbarElem}>
                    <svg className="feather feather-users" strokeLinejoin="round" strokeLinecap="round"
                         strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cy="7" cx="9"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <div className={styles.sub}>
                        <span>
                            Groups
                        </span>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Navbar;