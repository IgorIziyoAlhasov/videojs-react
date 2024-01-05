import React, { useRef, useState } from 'react'
import Player from '../components/Player';
import VJSPlaylist from '../components/VJSPlaylist';
import '../styles/basic.scss';
import '../styles/Redesigned.scss'

const Playlist = () => {
  const sourcePickerRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState('src/assets/vids/small_vid.mp4')

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

  const copyToClipBoard = (e) => {
    let targetElement = e.target;

    navigator.clipboard.writeText(targetElement.innerText)
      .then(() => {
        targetElement.classList.add('copied');
        setTimeout(() => {
          targetElement.classList.remove('copied');
        }, 1000);
      });
  }

  const handleVideoChangeClick = (e) => {
    setCurrentVideo(sourcePickerRef.current.value);
  }
  return (
    <section className='page-content'>
      <h1 className='section-title'>Playlist Implementation</h1>
      <p className='section-content'>Here is my take on playlist for Video.js</p>

      <div className="media-container">
        <div className="vjs-container custom-style">
          <Player
            options={videoJsOptions}
          />
        </div>
        <div className="player-input">
          <p className='section-descriptions'>Video playlist</p>
          <div className='source-picker-container'>
            <p htmlFor="video-source-picker">Pick video:</p>
            <VJSPlaylist setVideo={setCurrentVideo}/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Playlist