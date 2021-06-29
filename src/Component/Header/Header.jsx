import React from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import styles from './Header.module.css'
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderElements from "./HeaderElements/HeaderElements";

const Header = (props) => {
    return (
      <div className={styles.header}>
        <HeaderLogo />
        <HeaderSearch/>
        <HeaderElements isAuth={props.isAuth}
                        login={props.login}
                        logout={props.logout}
        />
      </div>
    );
}

export default Header;