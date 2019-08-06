import React from 'react';
import VideosSection from './videosSection';
import Header from './header';
import requiresLogin from './requiresLogin';

function Videos(){
    return(
      <div className="vids">
        <Header/>
        <VideosSection/>
      </div>

    )
}

export default requiresLogin()(Videos);