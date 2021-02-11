import React from "react";
import Row from "../components/Row";
import RowList from "../components/RowList";
import Axios from "axios";

const HomeScreen = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const getTopRatedMovies = async () => {
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

    getTopRatedMovies();
  }, []);

  return movies.length > 0 ? (
    <RowList id="home-screen">
      <Row
        id="top-rated"
        className="flex no-wrap"
        title={"Top Rated"}
        movies={movies}
      />
      <Row
        id="now-playing"
        className="flex no-wrap"
        title={"Now Playing"}
        movies={movies}
      />
    </RowList>
  ) : (
    <p>No movies</p>
  );
};

export default HomeScreen;
