const initialState = {
  movies: [],
  movie: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return {
        ...state,
        movies: action.payload
      };
    case 'LOAD_MOVIE':
      return {
        ...state,
        movie: action.payload
      };
    case 'CLEAR_MOVIE':
      return {
        ...state,
        movie: null
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case 'UPDATE_MOVIE':
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? action.payload : movie
        ),
        movie: action.payload
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload)
      };
    default:
      return state;
  }
}
