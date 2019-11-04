import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AllReduxActionTypes, BaseAction} from '../../rootReducer';
import {Movie, IReduxMoviesState} from './reducer';

export interface HomeScreenAction extends BaseAction {
  type: AllReduxActionTypes.HOME_SCREEN;
  data: Movie[];
}
export interface DeleteMovieAction extends BaseAction {
  type: AllReduxActionTypes.DELETE_MOVIES;
  data: Movie;
}

// export interface IReduxResetMovieAction extends BaseAction {
//   type: AllReduxActionTypes.RESET_MOVIE;
// }

export function getMovies(): ThunkAction<
  Promise<HomeScreenAction>,
  IReduxMoviesState,
  undefined,
  HomeScreenAction
> {
  return async (
    dispatch: ThunkDispatch<IReduxMoviesState, undefined, HomeScreenAction>,
  ) => {
    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    );
    const movies = await res.json();

    return dispatch({
      type: AllReduxActionTypes.HOME_SCREEN,
      data: movies.results,
    });
  };
}

export function deleteMovie(
  Movie: Movie,
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

// export function resetMovie(): IReduxResetMovieAction {
//   return {
//     type: EReduxActionTypes.RESET_MOVIE,
//   };
// }
