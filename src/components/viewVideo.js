import React from 'react';
import Iframe from 'react-iframe'

export default class ViewVideo extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            videos: ""
        };
    }
    render(){
        return(<div className="myVideos">
        <main role="main">

        <section className="jumbotron text-center">
        <div className="container">
            <h1 className="jumbotron-heading">All Videos</h1>
            <p className="lead text-muted">placeholder text for all videos</p>
        </div>
        </section>
        <div className="album py-5 bg-light">
<div className="container">

  <div className="row">
  <div className="col-4">
      <div className="card">
        <div className="card-body">
      <Iframe url={`http://www.youtube.com/embed/akjsf`}
        id="my-frame"
        className="iframe"
        display="initial"
        position="relative"/>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Like</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</div>

</main>
</div>)
        
    }
}