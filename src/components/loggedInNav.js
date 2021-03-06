import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requiresLogin.js';
import { withRouter } from "react-router-dom";
import { fetchProtectedData } from '../actions/protectedData.js';
import { clearAuth } from '../actions/auth.js';
import { clearAuthToken } from '../localStorage.js';
import icon from "../images/nav-icon.png";
import './nav.css';

import { Menu, Image } from 'semantic-ui-react';

//navigation for the logged in part of the nav, user's dash, all videos, logout
export class LoggedInNav extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  handleLogOut() {
    this.props.history.push('/')
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <Menu className="logged-in-nav">
        <Menu.Menu position="left">
          <Menu.Item>
            <Image style={{ width: 70, height: 33 }} src={icon} />
          </Menu.Item>

          <Menu.Item name="user" onClick={() => this.props.history.push("/")}>
            Hello, {this.props.firstName}
          </Menu.Item>
          <Menu.Item name="myVideos" onClick={() => this.props.history.push("/my-videos")}>
            My Videos
              </Menu.Item>
          <Menu.Item name="videos" onClick={() => this.props.history.push("/videos")}>
            All Videos
              </Menu.Item>
        </Menu.Menu>
        <Menu.Item position="right"
          name="logout"
          onClick={() => this.handleLogOut()}
        >
          Log Out
            </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    firstName: `${currentUser.firstName}`,
  };
};

export default requiresLogin()(withRouter(connect(mapStateToProps)(LoggedInNav)));

