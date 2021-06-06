import React, { useEffect } from "react"
import { StyleSheet, View, Pressable, Text } from "react-native"
import * as Notifications from "expo-notifications"
import * as Permissions from "expo-permissions"
import styles from "../styles"

// Show notifications when the app is in the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    }
  },
})

export default function Notif() {

  useEffect(() => {
    // Permission for iOS
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then(statusObj => {
        // Check if we already have permission
        if (statusObj.status !== "granted") {
          // If permission is not there, ask for the same
          return Permissions.askAsync(Permissions.NOTIFICATIONS)
        }
        return statusObj
      })
      .then(statusObj => {
        // If permission is still not given throw error
        if (statusObj.status !== "granted") {
          throw new Error("Permission not granted")
        }
      })
      .catch(err => {
        return null
      })
  }, [])

  const triggerLocalNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "QUIZ REMINDER",
        body: "Don't forget to take a quiz today!",
      },
      trigger: {
        hour: 17,
        minute: 16,
        // seconds: 60,
        repeats: true,
      },
    })
  }
  // await Notifications.cancelScheduledNotificationAsync(identifier)
  
  // const triggerHourlyNot = () => {
    
  //   const trigTime = new Date(Date.now() + 1)
  //   const trigTime = new Date(Date.now())
  //   trigTime.setHours(20)
  //   trigTime.setMinutes(9)
    
  //   Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: "Happy New Hour",
  //     },
  //     trigger: {
  //       date: trigTime,
  //       seconds: 60,
  //       days: 1,
  //       repeats: true,
  //       repeat: 'day',
  //     }
  //   })
  // }

  const cancelLocalNotificationHandler = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync()
  }
  
  return (
    <View>

      <Pressable style={[styles.button, {marginVertical: 0, marginTop: 5, backgroundColor: 'white'}]} onPress={triggerLocalNotificationHandler}>
        <Text>
          Trigger Local Notification @20:00
        </Text>
      </Pressable>
      
      <Pressable style={[styles.button, {marginVertical: 0, marginTop: 5, backgroundColor: 'white'}]} onPress={cancelLocalNotificationHandler}>
        <Text>
          Cancel Local Notification
        </Text>
      </Pressable>
      
      {/* <Button
        style={styles.button}
        title="Trigger hourly Notification"
        onPress={triggerHourlyNot}
        /> */}
    </View>
  )
}

