import React, { useState, useContext } from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  Pressable, 
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import styles from '../styles'
import { DeckContext } from '../DeckContext'
import { Card } from './Card'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const NewDeckScreen = ({ navigation }) => {

  const { decks, setDecks } = useContext(DeckContext)

  const [deckName, setDeckName] = useState("")

  const handleSubmit = () => {

    setDecks(prevDecks => ({ ...prevDecks, [deckName]: { title: deckName, questions: [ ]}}))

    setDeckName(dName => "")
    
    navigation.navigate("Home")
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View>
          <Card>
            <Text style={styles.text}>Create your new Deck Name!!</Text>

            <TextInput style={styles.textInput} placeholder="Enter New Deck Name" value={deckName} onChangeText={text => setDeckName(text)}/>

            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text>
                Submit
              </Text>
            </Pressable>

          </Card>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
  