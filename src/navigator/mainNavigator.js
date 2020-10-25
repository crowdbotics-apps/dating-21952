import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings161375Navigator from '../features/Settings161375/navigator';
import Settings161373Navigator from '../features/Settings161373/navigator';
import SignIn2161371Navigator from '../features/SignIn2161371/navigator';
import Settings161355Navigator from '../features/Settings161355/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings161375: { screen: Settings161375Navigator },
Settings161373: { screen: Settings161373Navigator },
SignIn2161371: { screen: SignIn2161371Navigator },
Settings161355: { screen: Settings161355Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
