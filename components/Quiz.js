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
      answersCorrect: 0,
      showQuestion: true,
      showTestResult: false
    }
  }

  correctAnswer() {
    this.setState({ answersCorrect: (this.state.answersCorrect + 1) })
    this.goToNextCard()
  }

  goToNextCard() {
    const newCurrent = this.state.current + 1

    if (newCurrent < (this.state.total))
      this.setState({ current: newCurrent, showQuestion: true })
    else
      this.setState({ showTestResult: true })
  }

  restartQuiz() {
    this.setState({
      current: 0,
      answersCorrect: 0,
      showQuestion: true,
      showTestResult: false
    })
  }

  render() {
    const { questions, current } = this.state
    const question = questions[current]

    if (this.state.showTestResult)
      return (
        <View style={styles.container}>
          <View style={styles.body}>
            <Text style={styles.primaryText}>Quiz finished</Text>
            <Text style={styles.primaryText}>{this.state.answersCorrect} corrects</Text>
            <Text style={styles.primaryText}>{this.state.total - this.state.answersCorrect} incorrects</Text>
          </View>

          <View style={styles.options}>
            <Button onPress={() => this.restartQuiz()} title='restart quiz' />
            <Button onPress={() => this.props.navigation.goBack()} title='back to deck' />
          </View>
        </View>
      )

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.indexes}>{current+1}/{this.state.total}</Text>
        </View>

        {(this.state.showQuestion) ?
          (<View style={styles.body}>
            <Text style={styles.primaryText}>{question.question}</Text>
            <TouchableOpacity onPress={() => this.setState({ showQuestion: false })}>
              <Text style={styles.secondaryText}>Answer</Text>
            </TouchableOpacity>
          </View>) :
        (<View style={styles.body}>
          <Text style={styles.primaryText}>{question.answer}</Text>
          <TouchableOpacity onPress={() => this.setState({ showQuestion: true })}>
            <Text style={styles.secondaryText}>Question</Text>
          </TouchableOpacity>
        </View>)}

        <View style={styles.options}>
          <Button onPress={() => this.correctAnswer()} title='correct' />
          <Button onPress={() => this.goToNextCard()} title='incorrect' />
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
