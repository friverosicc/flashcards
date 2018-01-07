import React, { Component } from 'react'
import { FlatList, View, Text, Button } from 'react-native'
import { getDecks } from '../utils/api'
import Deck from './Deck'

class DeckList extends Component {
  constructor(props) {
    super(props)

    this.state = { decks: [] }
  }

  componentDidMount() {
    getDecks()
      .then(result => this.setState({ decks: Object.keys(result).map(key => (result[key])) }))
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.decks}
          renderItem={({item}) => <Deck key={item.title} title={item.title} numberOfQuestions={item.questions.length} navigation={this.props.navigation} />}
          keyExtractor={(item, index) => (item.title)}/>
      </View>
    )
  }
}

export default DeckList
