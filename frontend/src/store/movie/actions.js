import movieService from '../../services/movieService';

export const removeMovie = (id) => async (dispatch) => {
  try {
    await movieService.remove(id);
    dispatch({ type: 'REMOVE_MOVIE', payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const updateMovie = (movie) => async (dispatch) => {
  try {
    const updatedMovie = await movieService.update(movie);
    dispatch({ type: 'UPDATE_MOVIE', payload: updatedMovie.data });
  } catch (err) {
    console.log(err);
  }
};

export const addMovie = (movie) => async (dispatch) => {
  try {
    const addedMovie = await movieService.add(movie);
    dispatch({ type: 'ADD_MOVIE', payload: addedMovie.data });
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
