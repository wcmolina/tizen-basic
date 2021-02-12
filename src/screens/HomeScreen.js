import React, { Component } from "react";
import Row from "../components/Row";
import RowList from "../components/RowList";
import Axios from "axios";
import navigation from "../utils/navigation";
import CardDetail from "../components/CardDetail";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movies: [],
    };
  }

  async componentDidMount() {
    try {
      this.setState({
        loading: true,
      });

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

      this.setState({
        movies: results,
        loading: false,
      });

      navigation.assignFocus("home-screen");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return this.state.loading ? (
      <p>Loading...</p>
    ) : (
      <>
        <CardDetail />
        <RowList
          id="home-screen"
          className="absolute bottom-0 left-0 right-0 ml-4 h-140"
        >
          <Row
            id="top-rated"
            className="flex no-wrap"
            title={"Top Rated"}
            movies={this.state.movies}
          />
          <Row
            id="now-playing"
            className="flex no-wrap"
            title={"Now Playing"}
            movies={this.state.movies}
          />
          <Row
            id="upcoming"
            className="flex no-wrap"
            title={"Upcoming"}
            movies={this.state.movies}
          />
          <Row
            id="trending"
            className="flex no-wrap"
            title={"Trending"}
            movies={this.state.movies}
          />
        </RowList>
        <div className="focus-indicator"></div>
      </>
    );
  }
}
