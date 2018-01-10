import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, FlatList, View, Text, Button } from 'react-native'
import { getDecks } from '../utils/api'

class DeckList extends Component {
  state = { decks: [] }

  _renderItem = ({item}) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetail', { title: item.title, callback: this._getDecks })}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.questions.length} cards</Text>
      </View>
    </TouchableOpacity>
  )

  componentDidMount() {
    this._getDecks()
  }

  componentWillReceiveProps({ navigation }) {
    const { newDeckCreated, newDeckTitle } = navigation.state.params
    if (newDeckCreated) {
      this._getDecks()
      navigation.navigate('DeckDetail', { title: newDeckTitle, callback: this._getDecks })
    }
  }

  _getDecks = () => {
    getDecks()
    .then(result => this.setState({ decks: Object.keys(result).map(key => (result[key])) }))
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.decks}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => (item.title)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    borderStyle: 'solid',
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    fontSize: 20,
    color: '#999'
  }
})
export default DeckList
