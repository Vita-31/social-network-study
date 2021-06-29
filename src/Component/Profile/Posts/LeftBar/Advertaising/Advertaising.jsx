import React from "react";
import styles from './Advertaising.module.css'

const Advertaising = () => {
    return(
        <div className={styles.advertaising}>
            <div className={styles.subs}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/480px-Infobox_info_icon.svg.png'/>
                <span> Advertisment</span>
            </div>
            <div className={styles.gif}>
                <img src='http://wpkixx.com/html/socimo/images/resources/ad-widget2.gif'/>
            </div>
        </div>
    );
}

export default Advertaising;