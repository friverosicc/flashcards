import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Tabs from './Tabs'
import DeckDetail from './DeckDetail'

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  }, 
  DeckDetail: {
    screen: DeckDetail
  }
})

export default MainNavigator
