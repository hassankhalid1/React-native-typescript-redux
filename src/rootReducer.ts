import {combineReducers} from 'redux';
import homeReducer from './containers/homeScreen/reducer';

export enum AllReduxActionTypes {
  HOME_SCREEN = 'HOME_SCREEN',
  DELETE_MOVIES = 'DELETE_MOVIE',
  //   RESET_MOVIE = 'RESET_MOVIE',
  //   TOGGLE_MESSAGE = 'TOGGLE_MESSAGE',
}

export interface BaseAction {
  type: AllReduxActionTypes;
}

const rootReducer = combineReducers({
  homeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
