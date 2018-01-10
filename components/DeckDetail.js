import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Deck from './Deck'
import { getDeck } from '../utils/api'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return { title }
  }

  state = {}

  componentDidMount() {
    const { title } = this.props.navigation.state.params

    this.getDeck(title)
  }

  getDeck(title) {
    getDeck(title)
      .then(result => this.setState({ deck: result }))
  }

  render() {
    const { deck } = this.state
    if (deck)
      return (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.description}>{deck.questions.length} cards</Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <Button title="Add card" onPress={ () => this.props.navigation.navigate('NewCard', { title: deck.title, callback: () => this.getDeck(deck.title) }) }/>
            <Button title="Start quiz" disabled={(deck.questions.length === 0)} onPress={ () => this.props.navigation.navigate('Quiz', { questions: deck.questions }) }/>
          </View>
        </View>
      )
    return (<View></View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  },
  buttonContainer: {
    justifyContent: 'space-around',
    flex: 1
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

export default DeckDetail
