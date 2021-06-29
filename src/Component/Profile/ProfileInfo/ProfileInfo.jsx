import React from "react";
import styles from './ProfileInfo.module.css'
import Userfoto from "../UserFoto/Userfoto";

const ProfileInfo = (props) => {
    return(
        <div className={styles.profileFoto}>
            <img src='http://wpkixx.com/html/socimo/images/resources/profile-banner.jpg' alt='profileLogo' />
            <Userfoto profile={props.profile}/>
        </div>
    );
}

export default ProfileInfo;