import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormControl/FormControl";
import {maxLengthCreator, required} from "../../Validation/validation/validation";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../Common/FormControl/Input.module.css'

const maxLengthLogin = maxLengthCreator(40)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'email', Input, [required, maxLengthLogin])}
            {createField('Password', 'password', Input, [required, maxLengthLogin], {type: 'password'})}
            {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}
            {
                error && <div className={styles.formControlSummary}>
                    {error}
                </div>
            }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login, logout})(Login)