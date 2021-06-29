import React from "react";
import styles from './Userfoto.module.css';

const Userfoto = (props) => {
    return (
        <div className={styles.user}>
            <div className={styles.userFoto}>
                <img src={props.profile.photos.large} alt='user'/>
            </div>
            <div className={styles.follow}>
                <a hfer='#!'>Follow</a>
            </div>
        </div>
    )
}

export default Userfoto;