import React from "react";
import styles from './Profile.module.css'
import Aboutuser from "./Aboutuser/Aboutuser";
import Nav from "./Nav/Nav";
import Aboutme from "./Aboutme/Aboutme";
import Leftbar from "./Posts/LeftBar/Leftbar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../Common/Preloader/Preloader";

const Profile = (props) =>{

    if(!props.profile) {
        return <Preloader/>
    }

        return(
            <div className={styles.wrapper}>
                <div className={styles.profile}>
                    <ProfileInfo profile={props.profile} />
                    <Aboutuser profile={props.profile}/>
                    <Nav profile={props.profile}/>
                    <Aboutme profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                    <div className={styles.lifeTime}>
                        <PostsContainer />
                        <Leftbar/>
                    </div>
                </div>
            </div>
        );

}


export default Profile;