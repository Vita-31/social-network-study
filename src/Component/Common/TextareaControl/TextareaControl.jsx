import React from "react";
import styles from "../InputControl/Input.module.css"

export const TextareaControl = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : " ") }>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}