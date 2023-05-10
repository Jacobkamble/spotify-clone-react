// Import React and the FaPauseCircle and FaPlayCircle components from react-icons/fa
import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

// Create a PlayPause component that takes in props isPlaying, activeSong, song, handlePause, and handlePlay
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  // If isPlaying is true and the activeSong title matches the song title, render the FaPauseCircle component with size 35 and className text-gray-300, and call handlePause on click
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    // Otherwise, render the FaPlayCircle component with size 35 and className text-gray-300, and call handlePlay on click
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

// Export the PlayPause component
export default PlayPause;