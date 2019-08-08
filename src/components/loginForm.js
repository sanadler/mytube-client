import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input.js';
import { login } from '../actions/auth.js';
import { required, nonEmpty } from '../validators.js';

import './login.css';

//login form for the login page, handles errors and authentication checks
export class LogInForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div className="login-page">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        validate={[required, nonEmpty]}
                    />
                    <button className="login" disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                </form>
            </div>
        );
    }
}



export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LogInForm);