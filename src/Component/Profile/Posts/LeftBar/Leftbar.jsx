import React from "react";
import  styles from './Leftbar.module.css'
import Advertaising from "./Advertaising/Advertaising";

const Leftbar = () => {
    return(
        <div className={styles.leftBar}>
            <Advertaising/>
        </div>
    );
}

export default  Leftbar;