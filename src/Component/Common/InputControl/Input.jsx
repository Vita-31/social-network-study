import React from "react";
import styles from "./Input.module.css"

const ControlForm = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : " ") }>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <ControlForm {...props}> <textarea {...input} {...restProps}/></ControlForm>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <ControlForm {...props}> <input {...input} {...restProps}/></ControlForm>
}