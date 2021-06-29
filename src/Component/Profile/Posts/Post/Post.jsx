import React from "react";
import styles from "./Post.module.css";




const Post = (props) => {

    return (
        <div className={styles.newPosts}>
            <div className={styles.post}>
                <p>{props.post}</p>

                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export  default Post;