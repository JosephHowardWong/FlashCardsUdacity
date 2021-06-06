import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../styles'
import { Card } from './Card'

export const ErrorScreen = ({ navigation, route }) => {

  const { dName } = route.params

  return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.text}>Error, There are no cards in this Deck! please create questions!</Text>

          <Pressable style={styles.button} onPress={() => navigation.navigate("Deck Top", { dName })}>
            <Text>
              Go Back
            </Text>
          </Pressable>

        </Card>
      </View>
  )
}
  