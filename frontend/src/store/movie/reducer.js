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
        movies: [...state.contacts, action.payload]
      };
    default:
      return state;
  }
}
