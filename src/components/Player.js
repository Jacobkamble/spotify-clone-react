// import React, useEffect and useRef from the react library
import React, { useEffect, useRef } from "react";
// import useSelector from the react-redux library
import { useSelector } from "react-redux";

// create a functional component called Player
const Player = () => {
  // get the activeSong from the player state
  const { activeSong } = useSelector((state) => state.player);
  // create a ref to be used for scrolling
  const divRef = useRef(null);
  // use the useEffect hook to scroll into view when the component mounts
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  // return the JSX for the component
  return (
    <>
      <div
        ref={divRef}
        className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
      >
        <div className="w-full flex flex-col">
          <div className="flex flex-col justify-between items-start">
            <h2 className="text-white font-bold text-2xl">
              {activeSong.title ? activeSong.title : "Spotify"}
            </h2>
            <p className="text-white font-bold text-1xl">
              {activeSong.artist ? activeSong.artist : "Music for everyone"}
            </p>
            
          </div>
          <div>
            <img
              className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-red/30"
              src={`${
                activeSong.photo
                  ? activeSong.photo
                  // :"https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                  // :"https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  :"https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  // : "https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg"
              }`}
              // eslint-disable-next-line
              alt={activeSong.title}
            ></img>
          </div>
          
        </div>
      </div>
    </>
  );
};

// export the Player component
export default Player;