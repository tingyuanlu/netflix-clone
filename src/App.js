import React from "react";
import Row from "./component/Row";
import "./App.css";
import requests from "./component/request";
import Banner from "./component/Banner";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
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
