// Import React and components
import React from "react";
import MusicLists from "../components/MusicLists";
import Loader from "../components/Loader";
import Error from "../components/Error";

// Import Apollo Client for GraphQL query
import { useQuery, gql } from "@apollo/client";

// Import Redux hooks to access state and dispatch actions
import { setToggleSearch } from "../redux/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const ForYou = () => {
  // Get searchTerm and toggleSearch from Redux store
  const { searchTerm, toggleSearch } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  // Define GraphQL query
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

  // Execute GraphQL query
  const { loading, error, data, refetch } = useQuery(query, {
    variables: { playlistId: 1 },
    notifyOnNetworkStatusChange: true,
  });

  // If toggleSearch is true, refetch the query with searchTerm
  if (toggleSearch) {
    refetch({ playlistId: 1, search: searchTerm });
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

  // Get songs from query result
  const songs = data?.getSongs;
  const heading = "For You";

  // Render MusicLists component with songs and heading
  return (
    <>
      <div className="animate-slidedown">
        <MusicLists songs={songs} heading={heading} />
      </div>
    </>
  );
};

export default ForYou;
