import React from "react";
import styles from './Posts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Validation/validation/validation";
import {FormControl, Input} from "../../Common/FormControl/FormControl";

const Posts = React.memo(props => {

    let itemPost = props.posts.map(p => <Post post={p.post} likeCounts={p.likesCount}/>)
{/*
    let addNewPost = () => {
        props.addNewPost()
    };

    let newPostCreate = () => {
        let text = newPostsElement.current.value;
        props.newPostCreate(text)
    };
*/}
    let addPost = (values) => {
        props.addNewPost(values.newPostBody)
    }

    return(
        <div className={styles.posts}>
            <div className={styles.createPost}>
                 <p>Create New Post</p>
                 <PostsFormRedux onSubmit={addPost} />
            </div>
            <div className={styles.innerPost}>
                {itemPost}
            </div>
        </div>
    );

})

let maxLengthCreatorNum = maxLengthCreator(20)

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form} >
            <Field component={Input} name={'newPostBody'} placeholder={'Create new post'}
                   validate={[required, maxLengthCreatorNum]}
            />
            <img src='data:image/png;base64,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'/>
            <button>Publish</button>
        </form>
    )
}

const PostsFormRedux = reduxForm({form: 'newPosts'})(PostsForm)

export default Posts;