import React from "react";
import styles from './HeaderSearch.module.css'

const HeaderSearch = () => {
    return (
        <div className={styles.headerSearch}>
            <form method='post'>
                <input type='text' placeholder='Search...'/>
                <button type='submit' className={styles.button}>
                    <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/search-2758901-2290828.png' alt='search'/>
                </button>
            </form>
        </div>
    );
}

export  default  HeaderSearch;