import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AllReduxActionTypes, BaseAction} from '../../rootInterfaces';
import {MovieObj, IReduxMoviesState} from './interfaces';
import {NavigationType} from '../../rootInterfaces';
export interface ListMoviesAction extends BaseAction {
  type: AllReduxActionTypes.LIST_MOVIES;
  data: MovieObj[];
}
export interface DeleteMovieAction extends BaseAction {
  type: AllReduxActionTypes.DELETE_MOVIES;
  data: MovieObj;
}

export interface EditMovieAction extends BaseAction {
  type: AllReduxActionTypes.EDIT_MOVIE;
  data: MovieObj;
  navigation: NavigationType['type'];
}
export interface NewMovieAction extends BaseAction {
  type: AllReduxActionTypes.NEW_MOVIES;
  data: MovieObj;
  navigation: NavigationType['type'];
}

// export interface IReduxResetMovieAction extends BaseAction {
//   type: AllReduxActionTypes.RESET_MOVIE;
// }

export function getMovies(): ThunkAction<
  Promise<ListMoviesAction>,
  IReduxMoviesState,
  undefined,
  ListMoviesAction
> {
  return async (
    dispatch: ThunkDispatch<IReduxMoviesState, undefined, ListMoviesAction>,
  ) => {
    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    );
    const movies = await res.json();

    return dispatch({
      type: AllReduxActionTypes.LIST_MOVIES,
      data: movies.results,
    });
  };
}

export function deleteMovie(
  Movie: MovieObj,
): ThunkAction<
  Promise<DeleteMovieAction>,
  IReduxMoviesState,
  undefined,
  DeleteMovieAction
> {
  return async (
    dispatch: ThunkDispatch<IReduxMoviesState, undefined, DeleteMovieAction>,
  ) => {
    return dispatch({
      type: AllReduxActionTypes.DELETE_MOVIES,
      data: Movie,
    });
  };
}

export function editMovie(
  movie: MovieObj,
  navigation: NavigationType['type'],
): ThunkAction<
  Promise<EditMovieAction>,
  IReduxMoviesState,
  undefined,
  EditMovieAction
> {
  return async (
    dispatch: ThunkDispatch<IReduxMoviesState, undefined, EditMovieAction>,
  ) => {
    return dispatch({
      type: AllReduxActionTypes.EDIT_MOVIE,
      data: movie,
      navigation: navigation,
    });
  };
}
export function newMovie(
  movie: MovieObj,
  navigation: NavigationType['type'],
): ThunkAction<
  Promise<NewMovieAction>,
  IReduxMoviesState,
  undefined,
  NewMovieAction
> {
  return async (
    dispatch: ThunkDispatch<IReduxMoviesState, undefined, NewMovieAction>,
  ) => {
    return dispatch({
      type: AllReduxActionTypes.NEW_MOVIES,
      data: movie,
      navigation: navigation,
    });
  };
}
