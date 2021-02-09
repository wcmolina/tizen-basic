import React from "react";
import MovieRow from "../components/MovieRow";
import Axios from "axios";

const HomeScreen = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const getLatestMovies = async () => {
      try {
        const response = await Axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            params: {
              api_key: "d7d3962a3e6fec4a4292088ffc71a8c0",
            },
          }
        );

        const {
          data: { results = [] },
        } = response || {};

        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    getLatestMovies();
  }, []);

  return (
    <>
      <MovieRow title={"Top Rated"} movies={movies} />
    </>
  );
};

export default HomeScreen;
