import React from "react";
import styles from './HeaderElements.module.css'
import WebElements from "./WebElements/WebElements";
import {NavLink} from "react-router-dom";

const HeaderElements = (props) => {
    return (
      <div className={styles.headerElements}>
          <div>
              {
                  props.isAuth
                      ? <div>
                          <NavLink to='/profile' className={styles.user}>
                              <div className={styles.userImg}>
                                  <img src='http://wpkixx.com/html/socimo/images/resources/user.jpg' alt='userImg' />
                              </div>
                              <div className={styles.userName}>
                                  <h4>{props.login}</h4>
                              </div>
                          </NavLink>
                          <button onClick={props.logout}>Logout</button>
                      </div>

                      : <NavLink to='/login'>Login</NavLink>
              }
          </div>
          <div>
              <WebElements/>
          </div>
      </div>
    );
}
export default HeaderElements;