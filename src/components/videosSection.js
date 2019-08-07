import React from 'react';
import './videos.css';
import Video from './video.js';

export default class VideosSection extends React.Component{
  constructor(props) {
      super(props);
  
      this.state = {
          data: {},
          videos: [],
          error: null,
          loading: false,
          allVideos: true,
          myVideos: false
      };
  }
    componentDidMount() {
      this.loadPage("CAkQAQ");
  }
  loadPage(pageToken) {
    this.setState({
        error: null,
        loading: true
    });

const apiKey = "AIzaSyAmP7VkJjDa4irNYr3ov75Hoby5BWAQ-ME";
    return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&pageToken=${pageToken}&maxResults=9&regionCode=US&key=${apiKey}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(responseJson =>
        this.setState({
            data: responseJson,
            videos: responseJson.items,
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


  handleNext(next){
    this.loadPage(next);

  }

  handlePrevious(previous){
    this.loadPage(previous);
  }
  
  handleLike(id){
    document.getElementById(id).classList.add('fill-button');

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

    }         
    else {
        const videos = this.state.videos;
        const allVideos = this.state.allVideos;
        const myVideos = this.state.myVideos;
        const next = this.state.data.nextPageToken;
        const previous = this.state.data.prevPageToken;
        body = (
            <div className="all-videos">
                <main role="main">
                    <div className="album">
                        <div className="container">
                        <div className="row">{videos.map(video => 
                        
                        <Video onClick={e => this.handleLike(video.id)} key={video.id} allVideos={allVideos} myVideos={myVideos} passVideo={video}/>)}

                        </div>
                        <div className="row">
                         <div className="col-12">                        
                            { previous ? <button type="button" className="site-buttons prev" onClick={() => this.handlePrevious(previous)}>Previous</button> : null }
                            { next ? <button type="button" className="site-buttons next" onClick={() => this.handleNext(next)}>Next</button> : null }
                        </div>

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