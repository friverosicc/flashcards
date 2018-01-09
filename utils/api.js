import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'Udacity:Flashcards'


export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(results => ((results === null) ? setDummyData() : JSON.parse(results)))
}

export function getDeck(deckId) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(results => (JSON.parse(results)))
    .then(decks => (decks[deckId]))
}

export function saveDeckTitle(deckTitle) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [deckTitle]: {
      title: deckTitle,
      questions: []
    }
  }))
}

export function addCardToDeck() {}

function setDummyData() {
  const dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}
