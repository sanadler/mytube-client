import React from 'react';

function Videos(){
    return(
        <div className="myVideos">
            <header role="banner">
                <h1>All Videos</h1>
                <input type="text" name='search' id='search' placeholder='Search a video'/>
                <button type='submit'>Search</button>
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
    )
}

export default Videos;