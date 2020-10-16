import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./request";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      <Banner />
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
