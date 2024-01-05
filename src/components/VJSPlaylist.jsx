import React, { useEffect, useState } from 'react';
import '../styles/playlist.scss';
import { playlistAPI } from '../assets/constants/variables'

const VJSPlaylist = ({ setVideo }) => {
  const playlist = playlistAPI;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null)

  const handlePlaylistItemClick = (index) => {
    setCurrentVideoIndex(index);
  }

  useEffect(() => {
    if (currentVideoIndex !== null)
      setVideo(playlist[currentVideoIndex].src);
  }, [currentVideoIndex])

  const handleNavigationButtonClick = (e) => {
    let currentIndex = currentVideoIndex;
    const { direction } = e.target.dataset;
    if (direction === 'next') {
      (currentIndex === null || currentIndex >= playlist.length - 1) ?
        setCurrentVideoIndex(0) :
        setCurrentVideoIndex(++currentIndex);
    } else if (direction === 'prev') {
      (currentIndex === null || currentIndex <= 0) ?
        setCurrentVideoIndex(playlist.length - 1) :
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
              onClick={() => handlePlaylistItemClick(index)}>{videoSource.videoTitle}</div>
          ))}
        </div>
      </div>
      <div className="playlist-controls">
        <button
          className='previouse-item playlist-nav-control'
          data-direction="prev"
          onClick={handleNavigationButtonClick}
        >&lt;&lt;</button>
        <button
          className='next-item playlist-nav-control'
          data-direction="next"
          onClick={handleNavigationButtonClick}
        >&gt;&gt;</button>
      </div>
    </section>
  )
}

export default VJSPlaylist;