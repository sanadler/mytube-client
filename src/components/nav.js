import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       // activeItem: {},
        loggedIn: false
    }
}

  handleItemClick(e, {name}){
    this.props.history.push(`/my-videos`);
    // this.setState({ 
    //   activeItem: name 
    // })
  }
  

  render() {
   // const { activeItem } = this.state.activeItem;
    const  loggedIn  = this.state.loggedIn;

    if (!loggedIn){
      return (
        <Menu>
          <Menu.Item
            name='signIn'
           // active={activeItem === 'signIn'}
            onClick={this.handleItemClick}
          >
            Sign In
          </Menu.Item>
  
          <Menu.Item name='signUp'  onClick={this.handleItemClick}>
            Sign Up
          </Menu.Item>
        </Menu>
      )
    }
    else{
      return (
        <Menu>
          <Menu.Item name='videos'  onClick={this.handleItemClick}>
            All Videos
          </Menu.Item>

          <Menu.Item name='myVideos'  onClick={this.handleItemClick}>
            My Videos
          </Menu.Item>

          <Menu.Item
            name='signOut'
           // active={activeItem === 'signOut'}
            onClick={this.handleItemClick}
          >
            Sign Out
          </Menu.Item>
  

        </Menu>
      )
    }
    
  }
}
export default withRouter(Nav);