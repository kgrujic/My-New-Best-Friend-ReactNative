import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const startTabs = () => {
    Promise.all([ 
        Icon.getImageSource(Platform.OS === 'android' ? "md-map" : "ios-map", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-add-circle" : "ios-add-circle",30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-refresh" : "ios-refresh", 30)
    ]).then(sources => {
        Navigation.setRoot({
            root: {
              sideMenu:{
                left:{
                  component:{
                    name: 'MyNewBestFriend.SideMenuScreen',
                  },
                },
              center:{
                id:'MYSTACK',
                bottomTabs: {
                  id: 'BottomTabsId',
                  children: [{
                    stack: {
                      id:'mainStack',
                      children: [{
                        component: {
                          name: 'MyNewBestFriend.FindDogScreen',
                          id:'findDog',
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
                              id: 'openSideDrawer',
                              icon:sources[2],
                              color:"orange"
                            },
                          
                          ],                  
                        }
                      }
                    }
                  },
                  {
                    component: {
                      name: 'MyNewBestFriend.ShareDogScreen',
                      id:'shareDog',
                      passProps: {
                        text: 'This is tab 2'
                      },
                      options: {
                        bottomTab: {
                          text: 'Share Dog',
                          icon:sources[1],
                          testID: 'SECOND_TAB_BAR_BUTTON'
                        },
                        topBar: {
                          title: {
                            text: 'Share Dog'
                          },
                          rightButtons:[
                            {
                              icon:sources[2]
                            }
                          ]
                        }
                      }
                    }
                  }]
                }
              }
          }
          }
        });
    });
   
    
};

export default startTabs;
