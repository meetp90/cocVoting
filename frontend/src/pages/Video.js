import React, { useRef, useState } from 'react';
import './Video.css';

export const Video = ({ url }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      <video ref={videoRef} onClick={onVideoPress} className="video_player" src={url} alt="" loop={true} />
    </div>
  );
};
