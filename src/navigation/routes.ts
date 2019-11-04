import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from '../containers';

enum ROUTES {
  homeScreen = 'mainScreen',
}

const RootStack = createStackNavigator(
  {
    [ROUTES.homeScreen]: {
      screen: HomeScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
