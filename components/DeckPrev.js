import React, { useContext } from 'react'
import { Pressable, View, Text, ScrollView, StyleSheet } from 'react-native'
import styles from '../styles'
import { DeckContext } from '../DeckContext'
import { Card } from './Card'
import Notif from './Notif'

export const DeckPrev = ({ navigation }) => {

    const { decks } = useContext(DeckContext)

    return (
        <View style={styles.container}>

            <Notif/>

            <Text style={styles.text}>Here are all the Decks, Choose one!</Text>

            <ScrollView style={{ width: '100%' }}>
                {Object.keys(decks).map(dName => (
                    <Card key={dName}>
                        <Text style={styles.text}>{dName}</Text>

                        {decks[dName].questions.length !== 1 ? 
                        <Text>{`${decks[dName].questions.length} cards`}</Text>
                        : <Text>1 card</Text>}

                        <Pressable style={styles.button} onPress={() => navigation.navigate("Deck Top", { dName })}>
                            <Text>
                                Choose this Deck
                            </Text>
                        </Pressable>
                    </Card>
                ))}
            </ScrollView>
            
        </View>
    )
}
