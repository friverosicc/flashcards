import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import MainNavigator from './components/MainNavigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: Constants.statusBarHeight }}>
          <StatusBar translucent />
        </View>

        <MainNavigator />
      </View>
    )
  }
}
