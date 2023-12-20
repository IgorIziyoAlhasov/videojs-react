import React, { useEffect, useState } from 'react'
/**
 * @typedef Playlist
 * @type {playlistItem[]}
 */

/**
 * @typedef  videoSource
 * @type {object}
 * @property {String} src
 * @property {String} type
 */

/**
 * @typedef playlistItem
 * @type {Object} 
 * @property {videoSource[]} sources
 */


//There is a playlist plugin for video.js but I wanna give it my own take. 
//So here is my React-style implementation
/**
 * @param {Playlist} playlist 
 * @returns 
 */
const PlaylistComponent = (playlist, setCurrentVideo,...props) => {

    const [currentPlaylist, setCurrentPlaylist] = useState([]);

    useEffect(() => {
      setCurrentPlaylist(playlist);
    }, [playlist])
    


    const playlistItem = {
        sources: [{
            src: currentVideo,
            type: 'video/mp4'
        }]
    }
    return (
        <section className='play-list-component'>
            <div className="list-holder"></div>
            <div className="playlist-controls"></div>
        </section>
    )
}

export default PlaylistComponent;