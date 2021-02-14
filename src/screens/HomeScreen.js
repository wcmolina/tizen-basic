import React, { Component } from "react";
import HttpClient from "../api/httpClient";
import Row from "../components/Row";
import RowList from "../components/RowList";
import CardDetail from "../components/CardDetail";
import Loader from "../components/Loader";
import navigation from "../utils/navigation";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  async componentDidMount() {
    try {
      const {
        data: { results = [] },
      } = (await HttpClient.get("movie/top_rated")) || {};

      this.setState({
        movies: results,
        loading: false,
      });

      navigation.assignFocus("rowlist-home");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return this.state.loading ? (
      <div className="center">
        <Loader />
      </div>
    ) : (
      <>
        <CardDetail />
        <RowList id="rowlist-home" className="row-list-container">
          <Row
            id="row-top-rated"
            title={"Top Rated"}
            movies={this.state.movies}
          />
          <Row
            id="row-now-playing"
            title={"Now Playing"}
            movies={this.state.movies}
          />
          <Row
            id="row-upcoming"
            title={"Upcoming"}
            movies={this.state.movies}
          />
          <Row
            id="row-trending"
            title={"Trending"}
            movies={this.state.movies}
          />
        </RowList>
        <div className="focus-indicator"></div>
      </>
    );
  }
}
