import React, { Component } from 'react'
import { Button, View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { addCardToDeck } from '../utils/api'

class NewCard extends Component {
  static navigationOptions = { title: 'Add Card' }

  state = {
    question: '',
    answer: ''
  }

  createCard() {
    const { question, answer } = this.state
    if (question === '' || answer === '')
      alert("You can't create a card with an empty question or answer")
    else
      addCardToDeck(this.props.navigation.state.params.title, { question, answer })
      .then(() => {
        this.props.navigation.state.params.callback()
        this.props.navigation.goBack()
        this.setState({ question: '', answer: '' })
      })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
        <View style={styles.container}>
          <TextInput
            style={{height: 30}}
            onChangeText={(question) => this.setState({ question })}
            value={this.state.question}
            placeholder="Question"
            placeholderTextColor="#555068"
          />

          <TextInput
            style={{height: 30}}
            onChangeText={(answer) => this.setState({ answer })}
            value={this.state.answer}
            placeholder="Answer"
            placeholderTextColor="#555068"
          />

          <Button
            onPress={() => this.createCard()}
            title='Create Card'/>
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
  }
})

export default NewCard
