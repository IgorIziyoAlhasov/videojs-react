import React, { useRef, useState } from 'react'
import Player from '../components/Player';
import '../styles/basic.scss';

const Basic = () => {
  const playerRef = useRef(null);
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
          <div className='source-picker-container'>
            <label htmlFor="video-source-picker">Change Video Source:</label>
            <input
              type="text"
              id='video-source-picker'
              className='source-change-input'
              placeholder="Enter video URL"
              ref={sourcePickerRef}
            />
            <button className='load-video' onClick={handleVideoChangeClick}>Load video</button>
          </div>

          <div className="sample-links">
            <p className='section-descriptions'>Here are some sample links for tryouts. Feel free to copy-paste them in to the input above. Just click to clipboard the link</p>

            <ul className='links-list'>
              <li className='linke-sample' onClick={copyToClipBoard}>http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</li>
              <li className='linke-sample' onClick={copyToClipBoard}>http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4</li>
              <li className='linke-sample' onClick={copyToClipBoard}>http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Basic;