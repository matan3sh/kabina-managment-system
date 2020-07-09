import React from 'react';
import MoviePreview from './MoviePreview';

const MovieList = ({ movies }) => {
  return (
    <div className='wrapper'>
      <div className='home-wrapper'>
        {movies.map((movie) => (
          <MoviePreview key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
