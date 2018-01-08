import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz' 
  }

  constructor(props) {
    super(props)
    
    const { questions } = props.navigation.state.params

    this.state = {
      questions,
      total: questions.length,
      current: 0,
      answersCorrect: 0
    }
  }

  render() {
    const { questions, current } = this.state
    const question = questions[current]

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.indexes}>{current+1}/{this.state.total}</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.primaryText}>{question.question}</Text>
          <TouchableOpacity onPress={() => alert('answer')}>
            <Text style={styles.secondaryText}>Answer</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.options}>
          <Button onPress={() => alert('correct ...')} title='correct' />
          <Button onPress={() => alert('incorrect ...')} title='incorrect' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  indexes: {
    fontSize: 20
  },
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  options: {
    flex: 1,
    justifyContent: 'space-around'
  },
  primaryText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  secondaryText: {
    fontSize: 20,
    color: '#F00'
  }
})

export default Quiz
