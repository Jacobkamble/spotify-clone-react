/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from "react";

// Player component to render audio element
const Player = ({
  activeSong, // song object containing url and other details
  isPlaying, // boolean value to determine if the song should be playing or not
  volume, // volume of the song
  seekTime, // current time of the song
  onEnded, // callback function when the song ends
  onTimeUpdate, // callback function when the time updates
  onLoadedData, // callback function when the data is loaded
  repeat, // boolean value to determine if the song should repeat or not
  currentIndex, // index of the current song in the list
}) => {
  const ref = useRef(null);

  // useEffect hook to update the audio element based on props
  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
      ref.current.volume = volume;
      ref.current.currentTime = seekTime;
    }
  }, [isPlaying, volume, seekTime]);

  return (
    <audio
      src={activeSong?.url}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;