import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Tabs from './Tabs'
import DeckDetail from './DeckDetail'
import Quiz from './Quiz'
import NewCard from './NewCard'

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  }, 
  DeckDetail: {
    screen: DeckDetail
  },
  Quiz: {
    screen: Quiz
  },
  NewCard: {
    screen: NewCard
  }
})

export default MainNavigator
