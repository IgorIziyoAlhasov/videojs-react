import { useEffect, useState } from 'react';

const VideoJSTitle = (props) => {
  const {source} = props;
  const [currentTitle, setCurrentTitle] = useState(null);


  useEffect(() => {
    setCurrentTitle(source.videoTitle);

    return () => {
    }
  }, [props]);

  return (
    <div className="rvjs-video-title">
      <div className="title-text">{currentTitle}</div>
      {/* TODO: implement call to action icon for titles*/}
      {/* <div className={`title-icon ${!titleIcon ? 'hidden' : ''}`}></div> */}
    </div>
  )

}

export default VideoJSTitle;