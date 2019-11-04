import {AllReduxActionTypes} from '../../rootReducer';
import {HomeScreenAction, DeleteMovieAction} from './actions';

export interface Movie {
  backdrop_path: string;
  id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

export interface IReduxMoviesState {
  movies: Movie[];
  moviesLoaded: boolean;
  moviesLoadedAt?: number;
  movie?: Movie;
  movieLoaded: boolean;
}

const initialState: IReduxMoviesState = {
  movies: [],
  moviesLoaded: false,
  moviesLoadedAt: undefined,
  movie: undefined,
  movieLoaded: false,
};

type HomeScreenReducerActions = HomeScreenAction | DeleteMovieAction;
//   | IReduxResetMovieAction;

export default function(
  state: IReduxMoviesState = initialState,
  action: HomeScreenReducerActions,
) {
  switch (action.type) {
    case AllReduxActionTypes.HOME_SCREEN:
      return {
        ...state,
        movies: action.data,
        moviesLoaded: true,
        moviesLoadedAt: Date.now(),
      };
    case AllReduxActionTypes.DELETE_MOVIES:
     
      return {...state, movies: state.movies.filter(function(movie) {
        return movie.title != action.data.title;
      }), movieLoaded: true};
    // case AllReduxActionTypes.RESET_MOVIE:
    //   return {...state, movie: undefined, movieLoaded: false};
    default:
      return state;
  }
}
