import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ReadStoryScreen from './Screens/ReadStoryScreen';
import WriteStoryScreen from './Screens/WriteStoryScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 


export default class App extends React.Component {
  render() {
    return (
    <View>
      <AppContainer/>
    </View>

  );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen},
})

const switchNavigator= createSwitchNavigator({
  WriteStoryScreen: {screen:WriteStoryScreen},
  ReadStoryScreen:{screen:ReadStoryScreen},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

