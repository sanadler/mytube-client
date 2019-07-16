import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sign } from 'crypto';


export default class Home extends React.Component {
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


