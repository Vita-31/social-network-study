import React from "react";
import styles from './Aboutme.module.css';
import SocialLink from "./SocialLink/SocialLink";
import StatusWithHock from "./Status/StatusWithhHooc";

const Aboutme = (props) => {
    return(
        <div>
            <div className={styles.about}>
                <StatusWithHock profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <SocialLink profile={props.profile}/>
            </div>
        </div>

    )
}

export  default Aboutme;