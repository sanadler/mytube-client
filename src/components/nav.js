import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import LoggedInNav from './loggedInNav.js';

class Nav extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <LoggedInNav />
      )
    }
    else {
      return (
        <Menu className="nav-bar">
          <Menu.Item name='signUp' onClick={() => this.props.history.push(`/signup`)}>
            Sign Up
          </Menu.Item>
          <Menu.Item
            name='login'

            onClick={() => this.props.history.push(`/login`) && this.handleItemClick}
          >
            Log In
          </Menu.Item>
        </Menu>
      )
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});


export default withRouter(connect(mapStateToProps)(Nav));