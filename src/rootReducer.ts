import {combineReducers} from 'redux';
import movieReducer from './containers/movie/reducer';

const rootReducer = combineReducers({
  movieReducer,
  // editReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
