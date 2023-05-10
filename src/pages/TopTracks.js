//importing React and components from MusicLists, Loader, Error
import React from "react";
import MusicLists from "../components/MusicLists";
import { useQuery, gql } from "@apollo/client";
import Loader from "../components/Loader";
import Error from "../components/Error";

//importing setToggleSearch from redux store and useDispatch, useSelector hooks
import { setToggleSearch } from "../redux/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";

//TopTracks component
const TopTracks = () => {
  //getting searchTerm and toggleSearch from redux store
  const { searchTerm, toggleSearch } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  //heading for the component
  const heading = "Top Tracks";

  //query to get songs
  const query = gql`
    query ExampleQuery($playlistId: Int!, $search: String) {
      getSongs(playlistId: $playlistId, search: $search) {
        _id
        title
        photo
        url
        duration
        artist
      }
    }
  `;

  //using useQuery hook to fetch data
  const { loading, error, data, refetch } = useQuery(query, {
    variables: { playlistId: 2 },
    notifyOnNetworkStatusChange: true,
  });

  //if toggleSearch is true, refetch data with searchTerm
  if (toggleSearch) {
    refetch({ playlistId: 2, search: searchTerm });
    console.log("refetchingg.....");
    // setHandlefetch(false);
    dispatch(setToggleSearch(false));
  }

  //if loading is true, return Loader component
  if (loading) return <Loader title={"Loading songs..."} />;

  //if error is true, return Error component
  if (error) return <Error title="Something went wrong. Please try again..." />;

  //if no result found, return Error component
  if (data.getSongs.length === 0) {
    return (
      <Error title={"Sorry! No result found. Please try another way..."} />
    );
  }

  //storing songs in a variable
  const songs = data?.getSongs;

  //returning MusicLists component with songs and heading props
  return (
    <>
      <div className="animate-slidedown">
        <MusicLists songs={songs} heading={heading} />
      </div>
    </>
  );
};

//exporting TopTracks component
export default TopTracks;
