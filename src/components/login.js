import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './loginForm.js';

export function LogIn(props) {
    if (props.loggedIn) {
        return <Redirect to="/my-videos" />;
    }

    return (
        <div className="sign-up">
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogIn);