// Importing necessary components and libraries
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useColor } from "color-thief-react";
import { SideBar, Searchbar, Player, MusicPlayer } from "./components";
import { ForYou, TopTracks, Favourites, RecentlyPlayed } from "./pages";

// Main App function
function App() {
  // Get active song from redux store
  const { activeSong } = useSelector((state) => state.player);

  // Get photo source of active song
  const src = activeSong?.photo;

  // Use color thief to get the dominant color of the photo
  const { data } = useColor(src, "hex", {
    crossOrigin: "anonymous",
    quality: 55,
  });

  return (
    <>
      <Router>
        <div className="relative flex">
          <SideBar />
          <div
            className={
              data
                ? `flex-1 flex flex-col bg-gradient-to-br from-black to-[${data}]`
                : `flex-1 flex flex-col bg-gradient-to-br from-black to-[#272727]`
            }
          >
            <Searchbar />
            <div className="px-6 animate-slideup h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
              <div className="flex-1 h-fit pb-40">
                <Routes>
                  <Route path="/" element={<ForYou />} />
                  <Route path="/top-tracks" element={<TopTracks />} />
                  <Route path="/favourites" element={<Favourites />} />
                  <Route path="/recently-played" element={<RecentlyPlayed />} />
                </Routes>
              </div>
              <div>
                <Player />
              </div>
              <div className="xl:sticky relative top-0 h-fit"></div>
            </div>
          </div>

          {/* Render music player if there is an active song */}
          {activeSong?.title && (
            <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
              <MusicPlayer />
            </div>
          )}
        </div>
      </Router>
    </>
  );
}

export default App;

// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useColor } from "color-thief-react";
// import { SideBar, Searchbar, Player, MusicPlayer } from "./components";
// import { ForYou, TopTracks, Favourites, RecentlyPlayed } from "./pages";

// function App() {
//   const { activeSong } = useSelector((state) => state.player);

//   const src = activeSong?.photo;

//   const { data } = useColor(src, "hex", {
//     crossOrigin: "anonymous",
//     quality: 55,
//   });

//   return (
//     <>
//       <Router>
//         <div className="relative flex">
//           <SideBar />
//           <div
//             className={
//               data
//                 ? `flex-1 flex flex-col bg-gradient-to-br from-black to-[${data}]`
//                 : `flex-1 flex flex-col bg-gradient-to-br from-black to-[#272727]`
//             }
//           >
//             <Searchbar />
//             <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
//               <div className="flex-1 h-fit pb-40">
//                 <Routes>
//                   <Route path="/" element={<ForYou />} />
//                   <Route path="/top-tracks" element={<TopTracks />} />
//                   <Route path="/favourites" element={<Favourites />} />
//                   <Route path="/recently-played" element={<RecentlyPlayed />} />
//                 </Routes>
//               </div>
//               <div>
//                 <Player />
//               </div>
//               <div className="xl:sticky relative top-0 h-fit"></div>
//             </div>
//           </div>

//           {activeSong?.title && (
//             <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
//               <MusicPlayer />
//             </div>
//           )}
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;
