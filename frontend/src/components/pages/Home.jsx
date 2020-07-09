import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMovies } from '../../store/movie/actions';

import Loader from '../shared/Loader';
import Navbar from '../layout/Navbar';
import MovieList from '../movie/MovieList';

class Home extends Component {
  componentDidMount() {
    setTimeout(() => this.props.loadMovies(), 1000);
  }

  render() {
    const { movies } = this.props;
    return (
      <>
        <Navbar />
        {!movies.length ? <Loader /> : <MovieList movies={movies} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movie.movies
});

const mapDispatchToProps = {
  loadMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
