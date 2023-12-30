import React, { useState } from 'react';
import Player from '../components/Player';
import './../styles/Redesigned.scss';

const CustomControls = () => {
  const [currentVideo, setCurrentVideo] = useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4')

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    // videoTitle: `Here goes video TITLE. Hope it's clear.`,
    sources: [{
      videoTitle: `Here goes video TITLE. Hope it's clear.`,
      src: currentVideo,
      type: 'video/mp4'
    }]
  };

  return (
    <section className='page-content'>
      <h1 className='section-title'>VideoJS - Custom Controls</h1>
      <p className='section-content'>Here is a player implementation with some customizations </p>

      <div className="media-container">
        <div className="vjs-container custom-style">
          <Player
            options={videoJsOptions}
            currentVideo={currentVideo}
          />
        </div>
      </div>

    </section>
  )
}

export default CustomControls