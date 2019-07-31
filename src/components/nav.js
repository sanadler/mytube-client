import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeItem: {},
        loggedIn: false
    }
}

  handleItemClick(e, {name}){
    this.setState({ 
      activeItem: name 
    })
    
  }
  

  render() {
    const { activeItem } = this.state.activeItem;
    const  loggedIn  = this.state.loggedIn;

    if (!loggedIn){
      return (
        <Menu>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
           onClick={() => this.handleItemClick && this.props.history.push(`/login`) }
          >
            Log In
          </Menu.Item>
  
          <Menu.Item name='signUp' onClick={() => this.props.history.push(`/signup`)}>
            Sign Up
          </Menu.Item>
        </Menu>
      )
    }
    else{
      return (
        <Menu>
          <Menu.Item name='videos'  onClick={() => this.props.history.push(`/videos`)}>
            All Videos
          </Menu.Item>

          <Menu.Item name='myVideos'  onClick={() => this.props.history.push(`/my-videos`)}>
            My Videos
          </Menu.Item>

          <Menu.Item
            name='signOut'
           // active={activeItem === 'signOut'}
           onClick={() => this.props.history.push(`/`)}
          >
            Sign Out
          </Menu.Item>
  

        </Menu>
      )
    }
    
  }
}
export default withRouter(Nav);