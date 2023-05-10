//importing react and components
import React from "react";
import MusicLists from "../components/MusicLists";
import { useQuery, gql } from "@apollo/client";
import Loader from "../components/Loader";
import Error from "../components/Error";
import {setToggleSearch} from '../redux/features/playerSlice'
import { useDispatch, useSelector } from "react-redux";

//declaring RecentlyPlayed component
const RecentlyPlayed = () => {
  const heading = "Recently Played";
  
  //defining query to get songs
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

//getting searchTerm and toggleSearch from redux store
const {searchTerm,toggleSearch}=useSelector((state)=>state.player);
const dispatch=useDispatch();

  //using useQuery hook to fetch data
  const { loading, error, data,refetch } = useQuery(query, {
    variables: { playlistId: 4 },notifyOnNetworkStatusChange:true
  });

  //if toggleSearch is true, refetch the query with searchTerm
  if (toggleSearch) {
    refetch({ playlistId: 4, search: searchTerm });
    console.log("refetchingg.....");
    dispatch(setToggleSearch(false))
    // setHandlefetch(false);
  }

  //display loader while loading
  if (loading) return <Loader title={"Loading songs..."} />;
  
  //display error message if there is an error
  if(error) return <Error   title="Something went wrong. Please try again..."/>

  //display error message if no result found
  if (data.getSongs.length === 0) {
    return <Error title={"Sorry! No result found. Please try another way..."} />;
  }

  //assigning songs to data fetched from query
  const songs = data?.getSongs;
  return (
    <>
      {/* passing songs and heading to MusicLists component */}
      <div className="animate-slidedown"> 
      <MusicLists songs={songs} heading={heading} />
      </div>
    </>
  );
};

//exporting RecentlyPlayed component
export default RecentlyPlayed