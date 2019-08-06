import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import Home from './home';
import SignUp from './signup';
import LogIn from './login';
import MyVideos from './myVideos';
import Videos from './allVideos';
import Footer from './footer';
import Nav from './nav';
import {refreshAuthToken} from '../actions/auth';
import {connect} from 'react-redux';

import './App.css';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <Nav />
                <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/my-videos" component={MyVideos} />
                    <Route exact path="/videos" component={Videos} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));