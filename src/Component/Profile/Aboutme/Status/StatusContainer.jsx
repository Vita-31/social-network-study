import React from "react";
import styles from '../Aboutme.module.css'
import {setStatus} from "../../../../redux/profile-reducer";

class StatusContainer extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return(
            <div>
                <div className={styles.aboutMe}>
                    <h4>About Me</h4>
                    {!this.state.editMode &&
                    <div>
                        <p onDoubleClick={this.activateEditMode}>{this.state.status || '------'}</p>
                    </div>
                    }
                    {this.state.editMode &&
                    <div>
                         <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status } />
                    </div>
                    }
                </div>
            </div>

        )
    }
}

export  default StatusContainer;