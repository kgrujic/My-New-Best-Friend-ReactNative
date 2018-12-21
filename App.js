import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import ShareDogScreen from './src/screens/ShareDog/ShareDog';
import FindDogScreen from './src/screens/FindDog/FindDog';
import DogDetailScreen from './src/screens/DogDetail/DogDetail';
import SideMenuScreen from './src/screens/SideMenu/SideMenu';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import withReduxStoreWrapper from './src/store/withStore';
import Icon from 'react-native-vector-icons/Ionicons';
import React,{Component} from 'react';


const registerScreens = screens => {
  const store = configureStore();
  //screens.forEach(([ path, screen ]) => Navigation.registerComponent(path, () => withReduxStoreWrapper(screen, store)))
  screens.forEach(([ path, screen ]) => Navigation.registerComponentWithRedux(path, () => screen, Provider, store))
}

const screens = [["MyNewBestFriend.AuthScreen",AuthScreen ],["MyNewBestFriend.ShareDogScreen",ShareDogScreen],["MyNewBestFriend.FindDogScreen",FindDogScreen],["MyNewBestFriend.DogDetailScreen", DogDetailScreen],["MyNewBestFriend.SideMenuScreen", SideMenuScreen]];
registerScreens(screens);

// Start a App
//TO DO export
 Promise.all([
  Icon.getImageSource('md-paw',30)
]).then((sources) => {
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
              text: 'My New Best Friend',          
            },
            leftButtons:[{
              icon: sources[0]
            }],
          }
        }
      }
    }
  });
});




