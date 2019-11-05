import {NavigationScreenProp} from 'react-navigation';

export enum AllReduxActionTypes {
  LIST_MOVIES = 'LIST_MOVIES',
  DELETE_MOVIES = 'DELETE_MOVIE',
  EDIT_MOVIE = 'EDIT_MOVIE',
  NEW_MOVIES = 'NEW_MOVIES',
}

export interface BaseAction {
  type: AllReduxActionTypes;
}

export type NavigationType = {
  type: NavigationScreenProp<any, any>;
};
