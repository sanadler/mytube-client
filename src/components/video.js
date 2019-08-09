import React from 'react';
import Iframe from 'react-iframe';
import { API_BASE_URL } from '../config.js';
import { Button, Modal } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
import requiresLogin from './requiresLogin.js';
import { connect } from 'react-redux';

//specific video cards
//checks whether it is for all videos page or my videos page
//handles adding a video to your dash/DB, delete, update
//handles viewing the videos
export class Video extends React.Component {
  addVideoToFavorites(video) {
    const newVideoId = video.id;
    const newVideoTitle = video.snippet.localized.title;
    const newVideoDescription = video.snippet.localized.description;
    const newUser = this.props.lastName;
    return fetch(`${API_BASE_URL}/videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        videoId: newVideoId,
        title: newVideoTitle,
        description: newVideoDescription,
        likedUsers: newUser
      })
    })
      .then(res => res.json())
      .catch(error => alert(error))
  }


  handleAdd(video) {
    this.addVideoToFavorites(video);
    this.props.onClick(video);
  }

  updateVideo(video) {
    var updateTitle = document.getElementById("update-title").value;
    if (updateTitle === "") {
      updateTitle = video.title;
    }
    var updateDescription = document.getElementById("update-description").value;
    if (updateDescription === "") {
      updateDescription = video.description;
    }
    return fetch(`${API_BASE_URL}/videos/${video.id}`, {
      method: 'put',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain"
        // "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: video.id,
        title: updateTitle,
        description: updateDescription
      })
    })
      .then(res => res.json())
      .catch(error => console.log(error))
  }



  deleteVideo(id) {
    return fetch(`${API_BASE_URL}/videos/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .catch(error => alert(error))

  }

  handleDelete(id) {
    this.deleteVideo(id);
    window.location.reload();
  }

  handleUpdate(id) {
    this.updateVideo(id);
    window.location.reload();
  }

  render() {
    if (this.props.allVideos && this.props.myVideos === false) {
      return (
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h3>Title: {this.props.passVideo.snippet.localized.title}</h3>
              <Iframe url={`https://www.youtube.com/embed/${this.props.passVideo.id}`}
                id="my-frame"
                className="iframe"
                display="initial"
                position="relative" />
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Modal trigger={<button type="button" className="btn btn-outline-secondary">View</button>}>
                    <Modal.Header>{this.props.passVideo.snippet.localized.title}</Modal.Header>
                    <Modal.Content image scrolling>
                      <Iframe height="190px" size='medium' url={`https://www.youtube.com/embed/${this.props.passVideo.id}`} wrapped />
                      <Modal.Description>
                        <p className="video-description" style={{ paddingBottom: 5 }}>{this.props.passVideo.snippet.localized.title}</p>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                  <button type="button" id={this.props.passVideo.id} onClick={() => this.handleAdd(this.props.passVideo)} className="btn btn-outline-secondary">Like</button>
                </div>
              </div>
            </div>
          </div>
        </div>)
    }
    else if (this.props.myVideos && this.props.allVideos === false) {
      return (
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h3>Title: {this.props.passVideo.title}</h3>
              <Iframe url={`https://www.youtube.com/embed/${this.props.passVideo.videoId}`}
                id="my-frame"
                className="iframe"
                display="initial"
                position="relative" />
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Modal trigger={<button type="button" className="btn btn-outline-secondary">View</button>}>
                    <Modal.Header>{this.props.passVideo.title}</Modal.Header>
                    <Modal.Content image scrolling>
                      <Iframe height="190px" size='medium' url={`https://www.youtube.com/embed/${this.props.passVideo.videoId}`} wrapped />

                      <Modal.Description>
                        <p className="video-description" style={{ paddingBottom: 5 }}>{this.props.passVideo.description}</p>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                  <Modal trigger={<button type="button" className="btn btn-outline-secondary">Update</button>}>
                    <Modal.Header>
                      <label>Video Title
                        <input placeholder={this.props.passVideo.title} type="text" name="update-title" id="update-title" required />
                      </label>
                    </Modal.Header>
                    <Modal.Content image scrolling>
                      <Iframe height="190px" size='medium' url={`https://www.youtube.com/embed/${this.props.passVideo.videoId}`} wrapped />

                      <Modal.Description>
                        <label>Video Description
                            <textarea rows="10" className="video-description" placeholder={this.props.passVideo.description} type="text" name="update-description" id="update-description" required />
                        </label>
                      </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button type="submit" onClick={() => this.handleUpdate(this.props.passVideo)} primary>
                        Submit
                          </Button>
                    </Modal.Actions>
                  </Modal>
                  <button type="button" id={this.props.passVideo.id} onClick={() => this.handleDelete(this.props.passVideo.id)} className="btn btn-sm btn-outline-secondary">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>)
    }

  }
}


const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    lastName: `${currentUser.lastName}`
  };
};

export default requiresLogin()(withRouter((connect(mapStateToProps)(Video))));