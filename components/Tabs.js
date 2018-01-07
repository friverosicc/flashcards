import React from 'react'
import { TabNavigator } from 'react-navigation'
import DeckList from './DeckList'
import NewDeck from './NewDeck'

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
}, {
  animationEnabled: true
})

export default Tabs
