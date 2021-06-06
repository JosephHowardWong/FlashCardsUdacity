import React, { useContext } from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import styles from '../styles'
import { DeckContext } from '../DeckContext'
import { Card } from './Card'

export const DeckTop = ({ navigation, route }) => {

    const { decks } = useContext(DeckContext)

    const { dName } = route.params

    const handleStartQuiz = () => {

        if(decks[dName].questions.length === 0) {
            navigation.navigate("Error", { dName })
        } else {
            navigation.navigate("Question", { dName })
        }

    }

    return(
        <View style={styles.container}>
            <Card style={Styles.question}>
                <Text style={styles.text}>{`This is ${dName} Deck Top`}</Text>

                {decks[dName].questions.length !== 1 ? 
                <Text style={styles.text}>{`There are ${decks[dName].questions.length} cards in this deck`}</Text> 
                : 
                <Text style={styles.text}>There is 1 card in this deck</Text>}

                <Pressable style={styles.button} onPress={() => navigation.navigate("Add Card", { dName })}>
                    <Text>
                        Add Card
                    </Text>
                </Pressable>

                <Pressable style={styles.button} onPress={handleStartQuiz}>
                    <Text>
                        Start Quiz
                    </Text>
                </Pressable>
            </Card>
        </View>
    )
}

const Styles = StyleSheet.create({
    question: {
        marginVertical: 20,
        width: '80%'
    }
})