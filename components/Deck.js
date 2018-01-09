import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const Deck = (props) => (
  <TouchableOpacity onPress={() => props.navigation.navigate('DeckDetail', { title: props.title })}>
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.numberOfQuestions} cards</Text>
    </View>
  </TouchableOpacity>
)


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

export default Deck
