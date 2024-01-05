import React, { useState } from 'react';
import '../styles/playlist.scss';
import { playlistAPI } from '../assets/constants/variables'

const VJSPlaylist = ({setVideo}) => {
  const playlist = playlistAPI;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null)

  const handlePlaylistItemClick = (e, index) => {
    setCurrentVideoIndex(index);
    setVideo(playlist[index].src);
  }

  const handleNextVideoClick = (e) => {
    let currentVideoIndex = currentVideoIndex;
    if (currentVideoIndex === null || currentVideoIndex >= playlist.length - 1) {
      setCurrentVideoIndex(0);
    } else {
      setCurrentVideoIndex(++currentVideoIndex);
    }
  }

  const handlePrevVideoClick = (e) => {
    let currentIndex = currentVideoIndex;
    if (currentIndex === null || currentIndex <= 0) {
      setCurrentVideoIndex(playlist.length - 1);
    } else {
      setCurrentVideoIndex(--currentIndex);
    }
  }

  return (
    <section className='playlist-section'>
      <div className="playlist-container">
        <div className="playlist">
          {playlist.map((videoSource, index) => (
            <div key={index}
              className={`playlist-item ${index === currentVideoIndex ? "currently-playing" : ""}`}
              onClick={(e) => handlePlaylistItemClick(e, index)}>{videoSource.videoTitle}</div>
          ))}
        </div>
      </div>
      <div className="playlist-controls">
        <button
          className='previouse-item'
          onClick={handlePrevVideoClick}
        >Previous</button>
        <button
          className='next-item'
          onClick={handleNextVideoClick}
        >Next</button>
      </div>
    </section>
  )
}

export default VJSPlaylist;