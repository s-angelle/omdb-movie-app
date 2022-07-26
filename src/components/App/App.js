import axios from "axios";
// Hooks
import { useState } from "react";
// Components
import MovieInfo from "../MovieInfo/MovieInfo";
// CSS
import "./App.css";

function App() {
  // Create a state for omdbURL
  const [omdbURL, setOmdbURL] = useState("");
  // Create a state for input field
  const [movieTitle, setMovieTitle] = useState("");
  // Movie Info
  const [movieInfo, setMovieInfo] = useState({});

  const handleChange = (e) => {
    setMovieTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = "https://www.omdbapi.com/";
    const apiKey = "?apikey=" + process.env.REACT_APP_API_KEY;
    const query = "&t=";

    try {
      const response = await axios.get(baseUrl + apiKey + query + movieTitle);

      if (response.data.Response) {
        setMovieInfo(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <a href="">
        <h1 id="main-app-title">OMDB Movie App</h1>
      </a>

      <form onSubmit={handleSubmit}>
        <label htmlFor="movie-title">Movie Title : </label>
        <input
          type="text"
          required
          id="movie-title"
          value={movieTitle}
          onChange={handleChange}
        />
        <button id="submit-btn" type="submit">
          Submit
        </button>
      </form>

      <h2 id="movie-title">
        {movieInfo.Title} {movieInfo.Year}
      </h2>
      <div id="movie-info-div">
        <img id="movie-poster" src={movieInfo.Poster} />
      </div>
      <MovieInfo movieInfo={movieInfo} />
    </div>
  );
}

export default App;
