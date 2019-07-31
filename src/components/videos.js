import React from 'react';
import './videos.css';
import Iframe from 'react-iframe';
import {API_BASE_URL} from '../config';

export default class Videos extends React.Component{
  constructor(props) {
      super(props);
  
      this.state = {
          videos: [],
          next: " ",
          previous: " ",
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
const apiKey = "AIzaSyAmP7VkJjDa4irNYr3ov75Hoby5BWAQ-ME";
    return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${apiKey}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(responseJson =>
        this.setState({
            videos: responseJson.items,
            next: responseJson.nextPageToken,
            previous: responseJson.previousPageToken,
          //  title: responseJson,
            loading: false
        })
    
    )
    .catch(err =>
        this.setState({
            error: 'Could not load page',
            loading: false
        })
    );
  }
  
  handleView(id){
    this.props.history.push(`/view-video`, id) ;
  }

  
  addVideoToFavorites(id) {
    const newVideoId = id;
    return fetch(`${API_BASE_URL}/videos`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        videoId: newVideoId,
    })
  })
    .then(res => res.json())
    //.then(data => console.log(data)); 
    .catch(error => alert(error))
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
         const next = this.state.next;
         const previous = this.state.previous;
      //   const title = this.state.title;
         console.log(next);
         console.log(previous);
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
      // <Video />
      <div className="col-4">
          <div className="card" key={video.id}>
            <div className="card-body">
          <Iframe url={`http://www.youtube.com/embed/${video.id}`}
            id="my-frame"
            className="iframe"
            display="initial"
            position="relative"/>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onClick={() => this.handleView(video.id)} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" id={video.id} onClick={() => this.addVideoToFavorites(video.id)} className="btn btn-sm btn-outline-secondary">Like</button>
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