import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings161397Navigator from '../features/Settings161397/navigator';
import UserProfile161390Navigator from '../features/UserProfile161390/navigator';
import Settings161389Navigator from '../features/Settings161389/navigator';
import Settings161387Navigator from '../features/Settings161387/navigator';
import SignIn2161385Navigator from '../features/SignIn2161385/navigator';
import Settings161383Navigator from '../features/Settings161383/navigator';
import UserProfile161376Navigator from '../features/UserProfile161376/navigator';
import Settings161375Navigator from '../features/Settings161375/navigator';
import Settings161373Navigator from '../features/Settings161373/navigator';
import SignIn2161371Navigator from '../features/SignIn2161371/navigator';
import Settings161355Navigator from '../features/Settings161355/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings161397: { screen: Settings161397Navigator },
UserProfile161390: { screen: UserProfile161390Navigator },
Settings161389: { screen: Settings161389Navigator },
Settings161387: { screen: Settings161387Navigator },
SignIn2161385: { screen: SignIn2161385Navigator },
Settings161383: { screen: Settings161383Navigator },
UserProfile161376: { screen: UserProfile161376Navigator },
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
