import React from 'react';
import './videos.css';
import { API_BASE_URL } from '../config.js';
import { withRouter } from "react-router-dom";
import requiresLogin from './requiresLogin.js';
import { connect } from 'react-redux';
import Video from './video.js';

//user's dash page of videos they liked. 
//pulls from the database in the server and handles filtering for specific users
export class MyVideos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      allVideos: false,
      myVideos: true,
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
        return res.json();
      })
      .then(responseJson =>
        this.setState({
          videos: responseJson.videos,
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

  filterVideos() {
    let filteredVideos = this.state.videos;
    return filteredVideos = filteredVideos.filter(video => video.likedUsers === this.props.lastName);
  }

  render() {

    let body;
    if (this.state.error) {
      body = (
        <div className="message message-error">{this.state.error}</div>
      );
    } else if (this.state.loading) {
      body = (
        <div className="message message-default">Loading Page...</div>
      );
    } else {
      const allVideos = this.state.allVideos;
      const myVideos = this.state.myVideos;
      const filteredVideos = this.filterVideos();
      if (filteredVideos.length === 0) {
        body = (
          <div className="myVideos">
            <main role="main">
              <section className="my-videos jumbotron text-center">
                <div className="container video-header">
                  <h1 className="page-header jumbotron-heading">{this.props.firstName}'s Videos</h1>
                  <p className="lead">All your liked videos in one place!</p>
                </div>
              </section>
              <div className="album">
                <div className="container">
                  <div className="row">
                    <button type="button" id="all-videos" onClick={() => this.props.history.push(`/videos`)} className="site-buttons">Start Liking Videos!</button>
                  </div>
                </div>
              </div>
            </main>
          </div>

        );
      }
      else {
        body = (
          <div className="myVideos">
            <main role="main">

              <section className="my-videos jumbotron text-center">
                <div className="container video-header">
                  <h1 className="page-header jumbotron-heading">{this.props.firstName}'s Videos</h1>
                  <p className="lead">All your liked videos in one place!</p>
                </div>
              </section>
              <div className="album">
                <div className="container">

                  <div className="row">{filteredVideos.map(video =>
                    <Video key={video.id} allVideos={allVideos} myVideos={myVideos} passVideo={video} />)}
                  </div>
                </div>
              </div>

            </main>
          </div>

        );
      }
    }
    return (
      <div className="board">
        <h2>{this.props.videos}</h2>
        {body}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    firstName: `${currentUser.firstName}`,
    lastName: `${currentUser.lastName}`
  };
};

export default requiresLogin()(withRouter((connect(mapStateToProps)(MyVideos))));