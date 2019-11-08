import {AllReduxActionTypes} from '../../rootInterfaces';
import {
  ListMoviesAction,
  DeleteMovieAction,
  EditMovieAction,
  NewMovieAction,
} from './actions';
import {MovieObj, IReduxMoviesState} from './interfaces';

const initialState: IReduxMoviesState = {
  movies: [],
  moviesLoaded: false,
  moviesLoadedAt: undefined,
  movie: undefined,
  movieLoaded: false,
  movieUpdated: false,
};

type MovieReducerActions =
  | ListMoviesAction
  | DeleteMovieAction
  | EditMovieAction
  | NewMovieAction;

export default function(
  state: IReduxMoviesState = initialState,
  action: MovieReducerActions,
) {
  switch (action.type) {
    case AllReduxActionTypes.LIST_MOVIES:
      return {
        ...state,
        movies: action.data,
        moviesLoaded: true,
        moviesLoadedAt: Date.now(),
      };
    case AllReduxActionTypes.DELETE_MOVIES:
      return {
        ...state,
        movies: state.movies.filter(function(movie) {
          return movie.title != action.data.title;
        }),
        movieLoaded: true,
      };
    case AllReduxActionTypes.EDIT_MOVIE:
      const objIndex = state.movies.findIndex(obj => obj.id == action.data.id);
      const latestStageList = [
        ...state.movies.slice(0, objIndex),
        action.data,
        ...state.movies.slice(objIndex + 1),
      ];
      action.navigation.navigate('MovieScreen');
      return {
        ...state,
        movies: latestStageList,
        movieLoaded: true,
      };
    case AllReduxActionTypes.NEW_MOVIES:
      action.navigation.navigate('MovieScreen');
      return {
        ...state,
        movies: [action.data, ...state.movies],
        movieLoaded: true,
      };
    default:
      return state;
  }
}
