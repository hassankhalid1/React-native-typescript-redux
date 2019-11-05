import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home, Movie, EditMovie, NewMovie} from '../containers';

enum ROUTES {
  homeScreen = 'HomeScreen',
  movieScreen = 'MovieScreen',
  movieUpdateScreen = 'MovieEditScreen',
  newMovieScreen = 'NewMovieScreen',
}

const RootStack = createStackNavigator(
  {
    [ROUTES.movieScreen]: {
      screen: Movie,
    },
    [ROUTES.movieUpdateScreen]: {
      screen: EditMovie,
    },

    [ROUTES.newMovieScreen]: {
      screen: NewMovie,
    },
    [ROUTES.homeScreen]: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
