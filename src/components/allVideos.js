import React from 'react';
import VideosSection from './videosSection';
import Header from './header';
import requiresLogin from './requiresLogin';

//all videos dashboard, pulls the all videos header and the all videos video section
function Videos() {
  return (
    <div className="vids">
      <Header />
      <VideosSection />
    </div>

  )
}

export default requiresLogin()(Videos);