import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import SignUp from './signup';
import LogIn from './login';
import MyVideos from './myVideos';
import Videos from './videos';
import ViewVideo from './viewVideo';
import Footer from './footer';
import Nav from './nav';

import './App.css';

export default function App(props) {
    return (
        <Router>
            <div className="app">
            <Nav />
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/my-videos" component={MyVideos} />
                    <Route exact path="/videos" component={Videos} />
                    <Route exact path="/view-video" component={ViewVideo} />
                </main>
                <Footer/>
            </div>
        </Router>
    );
}