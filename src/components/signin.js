import React from 'react';

export default class SignUp extends React.Component{
  goToMyVideos(event) {
    event.preventDefault();
    this.props.history.push(`/my-videos`);
}
render() {
    return(
        <div className="signin">
          <section>
          <header>
              <h3>Sign In</h3>
          </header>
          <form class='signin-form'>
              <div>
                <label for="username">Username</label>
                <input type="text" name='username' id='username' />
              </div>
              <div>
                <label for="password">Password</label>
                <input type="password" name='password' id='password' />
              </div>
              <button type='submit' onClick={e => this.goToMyVideos(e)}>Sign In</button>
          </form>
        </section>
        </div>

    );
  }
}