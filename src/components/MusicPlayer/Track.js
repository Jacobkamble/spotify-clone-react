import React from "react";

// This component renders the active song's title, artist and cover art
const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div
      className={`${
        // If the song is playing and active, add a spinning animation
        isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
      } hidden sm:block h-16 w-16 mr-4`}
    >
      {/* Render the cover art of the active song */}
      <img src={activeSong?.photo} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      {/* Render the title of the active song */}
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      {/* Render the artist of the active song */}
      <p className="truncate text-gray-300">
        {activeSong?.artist ? activeSong.artist : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;