import React from 'react';
import { Link } from 'react-router-dom';

const MoviePreview = ({ movie }) => {
  return (
    <Link to={`/${movie._id}`}>
      <div className='home-card'>
        <img src={movie.poster} alt='' />
        <h2>{movie.engName}</h2>
        <h2>{movie.hebName}</h2>
        <h3>{movie.credit} :קרדיט</h3>
      </div>
    </Link>
  );
};

export default MoviePreview;
