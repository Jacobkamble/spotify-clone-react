// import necessary components from React and Redux
import React, { useRef, useEffect } from "react";
import PlayPause from "./PlayPause";
import { useSelector, useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

// function to format time in minutes and seconds
const getTime = (time) =>
  `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

// Card component for each song
const Card = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
      activeSong?.title === song?.title ? "bg-[#4c426e]" : "bg-transparent"
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={song?.photo}
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <p className="text-xl font-bold text-white">{song?.title}</p>

        <p className="text-base text-gray-300 mt-1">{song?.artist}</p>
      </div>
    </div>
    <div style={{ margin: "7px" }} className="text-base text-gray-300 mt-1">
      <p>{getTime(song.duration)}</p>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

// MusicLists component to render the list of songs
const MusicLists = ({ heading, songs }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // useRef hook to scroll into view when a song is clicked
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  // handlePauseClick dispatches an action to pause the song
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  // handlePlayClick dispatches an action to play the song
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, songs, i }));
    dispatch(playPause(true));
  };
  return (
    <>
      <div
        ref={divRef}
        className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
      >
        <div className="w-full flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-white font-bold text-2xl">{heading}</h2>
          </div>

          <div className="mt-4 flex flex-col gap-1">
            {songs?.map((song, i, arr) => (
              <Card
                key={song._id}
                song={song}
                songs={arr}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, i)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// export MusicLists component
export default MusicLists;