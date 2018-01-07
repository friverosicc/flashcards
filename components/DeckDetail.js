import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Deck from './Deck'
import { getDeck } from '../utils/api'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return { title }
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { title } = this.props.navigation.state.params

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
            <Button title="Add card" onPress={ () => alert("add card") }/>
            <Button title="Start quiz" onPress={ () => alert("start quiz") }/>
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
    fontWeight: 'bold'
  },
  description: {
    fontSize: 20,
    color: '#999'
  }
})

export default DeckDetail
