import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles'
import InitialState from './InitialState'
import { DeckContext } from './DeckContext'
import { HomeStackScreen } from './components/HomeStackScreen'
import { NewDeckScreen } from './components/NewDeckScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {

  const [decks, setDecks] = useState(InitialState)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const getData = async () => {
      try {
        // await AsyncStorage.clear()
        let savedDecks = await AsyncStorage.getItem('storedDecks')
        if(savedDecks !== null) {
          prevDecks = JSON.parse(savedDecks)
          setDecks(prevState => ({...prevState, ...prevDecks}))
        }
      } catch (err) {
        console.log("failed to retrieve saved decks: ", err)
      }
    }
    getData()

  }, [])

  useEffect(() => {
    const setData = async () => {
      try {
        AsyncStorage.setItem('storedDecks', JSON.stringify(decks))
      } catch (err) {
        console.log("Error saving card: ", err)
      } 
    }
    setData()

  }, [decks])

  return (
    <DeckContext.Provider value={{ decks, setDecks, score, setScore}}>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if ( route.name === "Home" ) {
                iconName = "home"
              } else if (route.name === "New Deck") {
                iconName = "pluscircle"
              }
              return <AntDesign name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'gray'}} 
          initialRouteName="Home" 
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="New Deck" component={NewDeckScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </DeckContext.Provider>
  );
}
