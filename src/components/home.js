import React from 'react';
import './App.css';
import About from './about';
import scroll from "../images/scroll-arrow.png";
import './home.css';



export default class Home extends React.Component {


    render(){
        return  (
          <div className="home-page">
            <main role="main">
              <div className="header">
                <section className="jumbotron text-center">
            <div className="container">
                <h1 className="homepage-header jumbotron-heading">MyTube</h1>
                <p className="home-lead">Find and watch your favorite videos any time!</p>
                <img className="homepage-scroll-arrow" alt="presentation" height="50px" width="50px" src={scroll}></img>
            </div>
            </section>
              </div>
              <div className="home-page-info">
                <About />
              </div>
            </main>
          </div>
        );
      }
  }


