import React from 'react';
import './videos.css';
import {API_BASE_URL} from '../config';
import requiresLogin from './requiresLogin';
import {connect} from 'react-redux';
import Video from './video';
import VideosSection from './videosSection';

export class MyVideos extends React.Component{
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
     //.then(responseJson => console.log(responseJson))
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

 

    render(){

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
          const videos = this.state.videos;
          const allVideos = this.state.allVideos;
          const myVideos = this.state.myVideos;
           console.log(videos);
           if(videos.length === 0){
             body = (<p className="myVideos">Start liking videos!</p>);
           }
        else{
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

      <div className="row">{videos.map(video => 
      <Video key={video.id} allVideos={allVideos} myVideos={myVideos} passVideo={video}/>)}
      </div>
        {/* <VideosSection className="left col-4"/> */}
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
    const {currentUser} = state.auth;
    return {
      firstName: `${currentUser.firstName}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(MyVideos));