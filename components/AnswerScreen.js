import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../styles'
import { DeckContext } from '../DeckContext'
import { Card } from './Card'

export const AnswerScreen = ({ navigation, route }) => {

  const { decks } = useContext(DeckContext)

  const { dName, qNum } = route.params

  return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.text}>{`The answer is ${decks[dName].questions[qNum].answer}`}</Text>

          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
            <Text>
              Go Back
            </Text>
          </Pressable>
        </Card>
      </View>
  )
}
  