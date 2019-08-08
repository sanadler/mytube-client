import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

//sign up page that holds the sign up form
import SignUpForm from './signupForm.js';

    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
export function SignUpPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/my-videos" />;
    }
    return (
        <div className="sign-up">
            <SignUpForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);