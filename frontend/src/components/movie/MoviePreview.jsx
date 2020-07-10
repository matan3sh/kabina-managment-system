import React from 'react';
import { Link } from 'react-router-dom';

const MoviePreview = ({ movie }) => {
  return (
    <Link to={`/${movie._id}`}>
      <div className='home-card'>
        <img src={movie.poster} alt='' />
        <h2>{movie.engName ? movie.engName.slice(0, 13) : ''}</h2>
        <h2>{movie.hebName ? movie.hebName.slice(0, 14) : ''}</h2>
        <h3>
          {movie.credit !== 'N/A' ? movie.credit : <span> לא צויין </span>}{' '}
        </h3>
      </div>
    </Link>
  );
};

export default MoviePreview;
