import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import alertReducer from './alert/reducer';
import movieReducer from './movie/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  movie: movieReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
