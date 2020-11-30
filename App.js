import React from "react";
import "./App.css";
import Row from "./Rows";
import requests from "./requests";
import Banner from './Banner'

function App() {
  return (
    <div className="App">

      {/* Nav Bar */}

      {/* Banner */}
      <Banner />
      {/* Banner */}

      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romanctic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
