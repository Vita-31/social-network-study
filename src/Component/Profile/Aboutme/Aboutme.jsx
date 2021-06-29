import React from "react";
import styles from './Aboutme.module.css'
import StatusContainer from "./Status/StatusContainer";
import SocialLink from "./SocialLink/SocialLink";

const Aboutme = (props) => {
    return(
        <div>
            <div className={styles.about}>
                <StatusContainer profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <SocialLink profile={props.profile}/>
            </div>
        </div>

    )
}

export  default Aboutme;