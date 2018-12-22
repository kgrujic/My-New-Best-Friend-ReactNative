import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startAuth= () => {
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
}

export default startAuth;