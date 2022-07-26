import { useState } from "react";

const MovieInfo = ({ movieInfo }) => {
/* 
    To see movie object from API:
  console.log(movieInfo);
   console.log(movieInfo.Title);
*/ 
  return (
    <div id="movie-plot-div">
      <p className="movie-info">{movieInfo.Plot}</p>
      <p className="movie-info">{movieInfo.Genre}</p>
    </div>
  );
};

export default MovieInfo;
