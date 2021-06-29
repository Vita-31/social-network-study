import React from "react";
import styles from './FindUsers.module.css'
import userPhoto from "../../images/images.jpg";
import {NavLink} from "react-router-dom";

let FindUsers = (props) => {

    let totalCountPages = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];

    for(let i = 1; i <= totalCountPages; i++) {
        pages.push(i);
    }



    return (
        <div className={styles.usersInner}>
            <div className={styles.span}>
                {pages.map( p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={() => { props.changePage(p); } }>{p}</span>
                })}
            </div>
            {
                props.users.map( u => <div key={u.id} className={styles.card}>
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
                </div>)
            }
        </div>
    )
}

export default FindUsers;