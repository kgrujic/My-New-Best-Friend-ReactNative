import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([ 
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt",30),
        Icon.getImageSource("ios-log-out", 30)
    ]).then(sources => {
        Navigation.setRoot({
            root: {
              bottomTabs: {
                children: [{
                  stack: {
                    id:'mainStack',
                    children: [{
                      component: {
                        name: 'MyNewBestFriend.FindDogScreen',
                        passProps: {
                          text: 'This is tab 1'
                        }
                      }
                    }],
                    options: {
                      bottomTab: {
                        text: 'Find Dog',
                        icon:sources[0],
                        testID: 'FIRST_TAB_BAR_BUTTON'
                      },
                      topBar: {
                        title: {
                          text: 'Find Dog'
                        },
                        rightButtons:[
                          {
                            icon:sources[2]
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  component: {
                    name: 'MyNewBestFriend.ShareDogScreen',
                    passProps: {
                      text: 'This is tab 2'
                    },
                    options: {
                      bottomTab: {
                        text: 'Share Dog',
                        icon:sources[1],
                        testID: 'SECOND_TAB_BAR_BUTTON'
                      },
                    }
                  }
                }]
              }
            
          }
        });
    });
   
    
};

export default startTabs;
