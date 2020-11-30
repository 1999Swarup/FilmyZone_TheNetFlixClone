import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [movie]);

  console.log(movie);

  return (
    <header className="banner">
      {/* Background Image */}

      <div className="banner__contents">
        {/* title */}
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        {/* <div/> 2 buttons */}
        {/* description */}
      </div>
    </header>
  );
}

export default Banner;
