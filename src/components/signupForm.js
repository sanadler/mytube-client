import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users.js';
import { login } from '../actions/auth.js';
import Input from './input.js';
import './signup.css';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators.js';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

//signup form for the signup page, handles errors and authentication checks
export class SignUpForm extends React.Component {
    onSubmit(values) {
        const { username, password, firstName, lastName } = values;
        const user = { username, password, firstName, lastName };
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <div className="signup-page">
                <form
                    className="signup-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                    <label htmlFor="firstName">First name</label>
                    <Field component={Input} type="text" name="firstName" className="form-control" />
                    <label htmlFor="lastName">Last name</label>
                    <Field component={Input} type="text" name="lastName" className="form-control" />
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        className="form-control"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        className="form-control"
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="passwordConfirm"
                        className="form-control"
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    <button
                        type="submit"
                        className="register"
                        disabled={this.props.pristine || this.props.submitting}>
                        Register
                </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(SignUpForm);