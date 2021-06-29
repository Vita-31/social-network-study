import React from "react";
import styles from '../Aboutme.module.css'
import {NavLink} from "react-router-dom";

const SocialLink = (props) => {
    return (
        <div>
            <div className={styles.share}>
                <h4>Share Profile</h4>
                <div className={styles.socialMedia}>
                    <a href={props.profile.contacts.facebook}><img
                        src='https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png'/></a>
                    <a href={props.profile.contacts.instagram}><img
                        src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-512.png'/></a>
                    <a href={props.profile.contacts.twitter}><img
                        src='https://cdnlogo.com/logos/t/96/twitter-icon.svg'/></a>
                    <a href={props.profile.contacts.mainLink}><img
                        src='https://cdn.iconscout.com/icon/free/png-256/google-2981831-2476479.png'/></a>
                    <a href={props.profile.contacts.github}><img
                        src='https://cdn.worldvectorlogo.com/logos/pinterest-1.svg'/></a>
                </div>
            </div>
        </div>

    )
}

export default SocialLink;