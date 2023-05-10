// Importing React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Importing the index.css file
import "./index.css";

// Importing the App component
import App from "./App";

// Importing the Provider and store from redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Importing ApolloClient, InMemoryCache and ApolloProvider from @apollo/client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Creating a new Apollo Client instance
const client = new ApolloClient({
  uri: "https://api.ss.dev/resource/api/",
  cache: new InMemoryCache(),
});

// Creating a root element in the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component with Redux and Apollo providers
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);