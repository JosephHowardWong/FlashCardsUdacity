import React, { useContext, useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../styles'
import { DeckContext } from '../DeckContext'
import { Card } from './Card'
import * as Notifications from 'expo-notifications'

export const FinalScore = ({ navigation, route }) => {

  const { decks, score, setScore } = useContext(DeckContext)

  const { dName } = route.params

  const triggerLocalNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "QUIZ REMINDER",
        body: "Don't forget to take a quiz today!",
      },
      trigger: {
        // seconds: 60,
        hour: 20,
        minute: 0,
        repeats: true,
      },
    })
  }

  const cancelLocalNotificationHandler = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync()
  }


  useEffect(() => {
    
    const currDate = new Date(Date.now())
    const currHour = currDate.getHours()
    const currMin = currDate.getMinutes()

    if(currHour < 20) {
      cancelLocalNotificationHandler()

      const hrsLeft = 20 - currHour - 1
      const minsLeft = 60 - currMin
      const totMin = (hrsLeft * 60) + minsLeft
      const totMillSecs = (totMin + 5) * 60 * 1000
      // set it at 20:05 for the next day
      
      // console.log({ hrsLeft })
      // console.log({ minsLeft })
      // console.log({ totMin })
      // console.log({ totMillSecs })
      

      setTimeout(() => {
        cancelLocalNotificationHandler()
        triggerLocalNotificationHandler()
        // console.log("New Daily Notification Triggered and handlded !!")
      }, totMillSecs)
    }

  }, [])

  // const date = Date.now()
  // console.log("the date is", date)
  // trigger.setHours(19)
  // trigger.setMinutes(0)
  // console.log("the trigger is", trigger)

  const handleRestartQuiz = () => {
    setScore(prevScore => 0)
    navigation.push("Question", { dName })
  }
  
  const handleBackToDeckTop = () => {
    setScore(prevScore => 0)
    navigation.navigate("Deck Top", { dName })
  }

  return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.text}>{`you answered ${score} out of ${decks[dName].questions.length} questions correctly`}</Text>

          <Pressable style={styles.button} onPress={handleRestartQuiz}>
            <Text>
              Restart Quiz
            </Text>
          </Pressable>

          <Pressable style={styles.button} onPress={handleBackToDeckTop}>
            <Text>
              Go Back to Top of Deck
            </Text>
          </Pressable>

        </Card>
      </View>
  )
}
  
