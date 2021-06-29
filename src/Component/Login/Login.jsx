import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/InputControl/Input";
import {maxLengthCreator, required} from "../../Validation/validation/validation";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from './../Common/InputControl/Input.module.css'

const maxLengthLogin = maxLengthCreator(40)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={Input}
                       validate={[required, maxLengthLogin]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} type={'password'} name={'password'} component={Input}
                       validate={[required, maxLengthLogin]}
                />
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input}/> Remember me
            </div>
            {
                props.error && <div className={styles.formControlSummary}>
                    {props.error}
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