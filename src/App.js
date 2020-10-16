import React from "react";
import logo from "./logo.svg";
import Row from "./Row";
import "./App.css";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchCommdyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documetaries" fetchUrl={requests.fetchDocumnetaries} />
    </div>
  );
}

export default App;
