import React from "react";
import styles from './FindUsers.module.css'
import userPhoto from "../../images/images.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let u = props.users;
    return (
                <div className={styles.card}>
                    <div>
                       <NavLink to={'/profile/' + u.id} >
                           <img className={styles.photo} src={u.photos.small !=null ?  u.photos.large : userPhoto} />
                       </NavLink>
                    <div>
                            { u.followed
                                ? <button disabled={props.followingToggle.some(id => id === u.id)}
                                          onClick={() => {props.unfollowSuccess(u.id)}}>Unfollow</button>
                                : <button disabled={props.followingToggle.some(id => id === u.id)}
                                          onClick={() => {props.followSuccess(u.id)}}>Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <h3>{u.name}</h3>
                        <p>{u.status}</p>
                        <p>{'u.location.country'}</p>
                        <p>{'u.location.city'}</p>
                    </div>
                </div>
    )
}

export default Users;