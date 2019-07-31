import React from 'react';
import './videos.css';
import {API_BASE_URL} from '../config';
import Iframe from 'react-iframe';

export default class MyVideos extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            videos: [],
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

    deleteVideo(id) {
      return fetch(`${API_BASE_URL}/videos/${id}`, {
              method: 'delete',
              headers: {
                  "Content-Type": "application/json"
              },
          })
              .catch(error => alert(error))
        
    }

   handleDelete(id){
        this.deleteVideo(id);
        window.location.reload();
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
        //   const title = this.state.title;
           console.log(videos);
        //  // console.log(description);
        //   console.log(title);
          body = (
              <div className="myVideos">
              <main role="main">
  
              <section className="jumbotron text-center">
              <div className="container">
                  <h1 className="jumbotron-heading">All Videos</h1>
                  <p className="lead text-muted">placeholder text for all videos</p>
              </div>
              </section>
              <div className="album py-5 bg-light">
      <div className="container">
  
        <div className="row">{videos.map(video => 
        <div className="col-4">
            <div className="card" key={video.videoId}>
              <div className="card-body">
            <Iframe url={`http://www.youtube.com/embed/${video.videoId}`}
              id="my-frame"
              className="iframe"
              display="initial"
              position="relative"/>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" id={video.id} onClick={() => this.handleDelete(video.id)} className="btn btn-sm btn-outline-secondary">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
          <button type="button" className="btn btn-sm btn-outline-secondary">Next</button>
  
        </div>
      </div>
    </div>
  
  </main>
  </div>
  
          );
      }
          return (
              <div className="board">
                  <h2>{this.props.videos}</h2>
                  {body}
              </div>
          );
  }
  
  }