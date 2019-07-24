import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sign } from 'crypto';
import {API_BASE_URL} from '../config';


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        lists: [],
        error: null,
        loading: false
    };
}
  componentDidMount() {
    this.loadPage();
}
loadPage() {
  this.setState({
      error: null,
      loading: true
  });
  return fetch(`${API_BASE_URL}/videos`)
  .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      console.log(res.json());
      return res.json();
  })
  .then(board =>
      this.setState({
          lists: board.lists,
          loading: false
      })
      
  )
  .catch(err =>
      this.setState({
          error: 'Could not load board',
          loading: false
      })
  );
}

    render(){
        return  (
          <div className="LandingPage">
            <main role="main">
              <div className="header">
                <header role="banner">
                    <h1>MyTube</h1>
                    <h2>Find and watch your favorite videos any time!</h2>
                </header>
              </div>
              <div className="body">
                <section>
                  <header>
                      <h3>Find your Videos</h3>
                  </header>
                  <p>[<em>placeholder for screenshot</em>]</p>
                  <p> find placholder</p>
                </section>
                <section>
                  <header>
                      <h3>Save your Videos</h3>
                  </header>
                  <p>[<em>placeholder for screenshot</em>]</p>
                  <p>save placeholder</p>
                </section>
                <section>
                  <header>
                      <h3>Watch your Videos</h3>
                  </header>
                  <p>[<em>placeholder for screenshot</em>]</p>
                  <p>watch placeholder</p>
                </section>
              </div>
            </main>
          </div>
        );
      }
  }


