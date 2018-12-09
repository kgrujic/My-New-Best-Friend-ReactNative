import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import ShareDogScreen from './src/screens/ShareDog/ShareDog';
import FindDogScreen from './src/screens/FindDog/FindDog';
import DogDetailScreen from './src/screens/DogDetail/DogDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import withReduxStoreWrapper from './src/store/withStore';



const registerScreens = screens => {
  const store = configureStore();
  //screens.forEach(([ path, screen ]) => Navigation.registerComponent(path, () => withReduxStoreWrapper(screen, store)))
  screens.forEach(([ path, screen ]) => Navigation.registerComponentWithRedux(path, () => screen, Provider, store))
}

const screens = [["MyNewBestFriend.AuthScreen",AuthScreen ],["MyNewBestFriend.ShareDogScreen",ShareDogScreen],["MyNewBestFriend.FindDogScreen",FindDogScreen],["MyNewBestFriend.DogDetailScreen", DogDetailScreen]];
registerScreens(screens);

// Start a App
Navigation.setRoot({
  root: {
    stack: {
      id:'myStack',
      children: [
        {
          component: {
              name: 'MyNewBestFriend.AuthScreen',
              passProps: {
                text: ''
              }
            }
        },
      
      ],
      options: {
        topBar: {
          title: {
            text: 'Login'
          }
        }
      }
    }
  }
});