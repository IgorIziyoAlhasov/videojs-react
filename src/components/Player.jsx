import React, { useEffect } from 'react'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './../styles/player.scss'

const Player = (props) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const { options, onReady, videoSource } = props;

    useEffect(() => {
        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                onReady && onReady(player);
            });

        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }

    }, [options, videoRef, videoSource])

    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);


    return (
        <div className='player-wrapper' data-vjs-player>
            <div ref={videoRef} />
        </div>
    )
}

export default Player