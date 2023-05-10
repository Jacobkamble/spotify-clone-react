// Import React and components
import React from "react";
import MusicLists from "../components/MusicLists";
import Loader from "../components/Loader";
import Error from "../components/Error";

// Import Apollo Client for GraphQL queries
import { useQuery, gql } from "@apollo/client";

// Import Redux hooks to access state and dispatch actions
import { setToggleSearch } from "../redux/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";

// Favourites component
const Favourites = () => {
  // GraphQL query
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

  // Get searchTerm and toggleSearch from Redux store
  const { searchTerm, toggleSearch } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  // Execute GraphQL query with variables
  const { loading, error, data, refetch } = useQuery(query, {
    variables: { playlistId: 3 },
    notifyOnNetworkStatusChange: true,
  });

  // If toggleSearch is true, refetch the query with searchTerm
  if (toggleSearch) {
    refetch({ playlistId: 3, search: searchTerm });
    dispatch(setToggleSearch(false));
  }

  // Show loader while loading
  if (loading) return <Loader title={"Loading songs..."} />;

  // Show error message if there is an error
  if (error) return <Error title="Something went wrong. Please try again..." />;

  // Show error message if no result found
  if (data.getSongs.length === 0) {
    return (
      <Error title={"Sorry! No result found. Please try another way..."} />
    );
  }

  // Get songs from data
  const songs = data?.getSongs;

  // Set heading
  const heading = "Favourites";

  // Render MusicLists component with songs and heading
  return (
    <>
    <div className='animate-slidedown'>
      <MusicLists songs={songs} heading={heading} />
      </div>
    </>
  );
};

// Export Favourites component
export default Favourites;
