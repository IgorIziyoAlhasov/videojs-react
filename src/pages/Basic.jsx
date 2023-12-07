import React, { useRef, useState } from 'react'
import Player from '../components/Player';
import '../styles/basic.scss';

const Basic = () => {
  const playerRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState('src/assets/vids/small_vid.mp4')
  //https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: currentVideo,
      type: 'video/mp4'
    }]
  };

  const handleVideoChangeClick = (e) =>{
    console.log(playerRef);
    setCurrentVideo(e.target.value);
  }
  return (
    <section className='page-content'>
      <h1 className='section-title'>Basic Implementation</h1>
      <p className='section-content'>Here is basic Video.js implementation</p>

      <div className="media-container">
        <div className="vjs-container">
          <Player
            options={videoJsOptions}
            currentVideo={currentVideo}
          />
        </div>
        <div className="player-input">
          <p className='section-descriptions'>Currently a default video is loaded here. But you can point your own video link below</p>
          <div>
        <label htmlFor="video-source-picker">Change Video Source:</label>
        <input
          type="text"
          id='video-source-picker'
          className='source-change-input'
          placeholder="Enter video URL"
        />
        <button className='load-video' onClick={handleVideoChangeClick}>Load video</button>
      </div>
        </div>
      </div>

    </section>
  )
}

export default Basic;