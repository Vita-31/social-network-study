import React from "react";
import styles from './Aboutuser.module.css';

const Aboutuser = (props) => {
    return (
        <div >
            <div className={styles.aboutUser}>
                <div className={styles.user}>
                    <h2>{props.profile.fullName}</h2>
                    <a href='#!'>user@gmail.com</a>
                </div>
                <div className={styles.aboutFollow}>
                    <div className={styles.followItem}>
                        <p>Joined: April 2020</p>
                    </div>
                    <div className={styles.followItem}>
                        <p>Follow: 55K</p>
                    </div>
                    <div className={styles.followItem}>
                        <p>Followers: 2.2K</p>
                    </div>
                    <div className={styles.followItem}>
                        <p> Posts: 932</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Aboutuser;