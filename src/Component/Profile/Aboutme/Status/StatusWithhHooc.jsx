import React, {useEffect, useState} from "react";
import styles from '../Aboutme.module.css'

const StatusWithHock = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            <div className={styles.aboutMe}>
                <h4>About Me</h4>
                {!editMode &&
                <div>
                    <p onDoubleClick={activateEditMode} >{status || '------'}</p>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onChangeStatus} onBlur={deactivateEditMode}
                           onFocus={true}
                           value={status}
                    />
                </div>
                }
            </div>
        </div>

    )
}

export  default StatusWithHock;