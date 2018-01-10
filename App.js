import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import MainNavigator from './components/MainNavigator'
import { setLocalNotification } from './utils/helpers'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

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
