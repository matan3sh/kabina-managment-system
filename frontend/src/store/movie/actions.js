import movieService from '../../services/movieService';

export const addMovie = (movie) => async (dispatch) => {
  try {
    const addedMovie = await movieService.add(movie);
    dispatch({ type: 'ADD_MOVIE', payload: addedMovie });
  } catch (err) {
    console.log(err);
  }
};

export const loadMovies = () => async (dispatch) => {
  try {
    const movies = await movieService.query();
    dispatch({ type: 'LOAD_MOVIES', payload: movies.data });
  } catch (err) {
    console.log(err);
  }
};

export const loadMovie = (id) => async (dispatch) => {
  try {
    const movie = await movieService.getById(id);
    dispatch({ type: 'LOAD_MOVIE', payload: movie.data });
  } catch (err) {
    console.log(err);
  }
};

export const clearMovie = () => async (dispatch) => {
  try {
    dispatch({ type: 'CLEAR_MOVIE' });
  } catch (err) {
    console.log(err);
  }
};
