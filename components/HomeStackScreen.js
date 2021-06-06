import React, { useState, useContext } from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles'
import { DeckContext } from '../DeckContext'
import { createStackNavigator } from '@react-navigation/stack'
import { DeckPrev } from './DeckPrev'
import { DeckTop } from './DeckTop'
import { AddCard } from './AddCard'
import { QScreen } from './QScreen'
import { ErrorScreen } from './ErrorScreen'
import { FinalScore } from './FinalScore'
import { AnswerScreen } from './AnswerScreen'

const Stack = createStackNavigator()

export const HomeStackScreen = ({ navigation }) => {

    return (
      <Stack.Navigator initialRouteName="Deck Preview">
          <Stack.Screen name="Deck Preview" component={DeckPrev} />
          <Stack.Screen name="Deck Top" component={DeckTop} />
          <Stack.Screen name="Add Card" component={AddCard} />
          <Stack.Screen name="Question" component={QScreen} />
          <Stack.Screen name="Error" component={ErrorScreen} />
          <Stack.Screen name="Final Score" component={FinalScore} />
          <Stack.Screen name="Answer" component={AnswerScreen} />
      </Stack.Navigator>
    )
}

