import React, { Component } from 'react'
import { Button, View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { saveDeckTitle } from '../utils/api'

class NewDeck extends Component {
  state = { text: '' }

  createDeck() {
    if (this.state.text === '')
      alert("You can't create a deck with an empty title")
    else
      saveDeckTitle(this.state.text)
      .then(() => {
        this.props.navigation.navigate('Decks', { newDeckCreated: true, newDeckTitle: this.state.text })
        this.setState({ text: '' })
      })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>What is the title of your new deck</Text>
          </View>

          <View style={styles.body}>
            <TextInput
              style={{height: 30}}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
              placeholder="Deck title"
              placeholderTextColor="#555068"
            />
          </View>

            <Button
              onPress={() => this.createDeck()}
              title='Create Deck'/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  body: {
    flex: 2,
    justifyContent: 'center'
  }
})

export default NewDeck
