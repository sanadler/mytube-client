import React from 'react';

export default class SignUp extends React.Component{
    goToVideos(event) {
        event.preventDefault();
        this.props.history.push(`/videos`);
    }
    render(){
        return(
            <div className="myVideos">
                <header role="banner">
                    <h1>My Videos</h1>
                    <input type="text" name='search' id='search' placeholder='Search a video'/>
                    <button type='submit'>Search</button>
                    <button type='submit' onClick={e => this.goToVideos(e)}>View All Videos</button>
                </header>
                <main role="main">
                <section>
                    <h2>Video 1</h2>
                    <p>placeholder</p>
                </section>
                <section>
                    <h2>Video 2</h2>
                    <p>placeholder</p>
                </section>
                <section>
                    <h2>Video 3</h2>
                    <p>placeholder</p>
                </section>
                </main>
            </div>
        );
    }

}