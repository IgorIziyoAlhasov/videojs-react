import React, { useEffect, useState } from 'react'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './../styles/player.scss';
import VideoJSTitle from './VideoJSTitle';

const Player = (props) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    let player = null;
    const [currentSource, setCurrentSource] = useState(null)
    const { options, onReady, videoSource } = props;

    useEffect(() => {
        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.insertAdjacentElement('beforeend',videoElement);

            player = playerRef.current = videojs(videoElement, options, () => {
                onReady && onReady(player);
            });

            setCurrentSource(player.currentSource());

        } else {
            player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
            setCurrentSource(player.currentSource());


        }

    }, [options, videoRef, videoSource])

    useEffect(() => {
        player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);


    return (
        <div className='player-wrapper'  data-vjs-player>
            {currentSource && <VideoJSTitle source={currentSource} />}
            <div className="player-container" ref={videoRef}></div>
        </div>
    )
}

export default Player;