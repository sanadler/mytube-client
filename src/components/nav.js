import React from 'react';

export default class Nav extends React.Component{
  goToMyVideos(event) {
    event.preventDefault();
    console.log(this.props);
    this.props.history.push(`/my-videos`);
}
  render() {
    return(
      <div className="signup">
        <section>
        <header>
            <h3>Start Watching</h3>
        </header>
        <form class='signup-form'>
            <div>
              <label for="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label for="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit' onClick={e => this.goToMyVideos(e)}>Sign Up</button>
        </form>
      </section>
      </div>
    );
  }
}