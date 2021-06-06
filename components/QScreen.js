import React, { useState, useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../styles'
import { DeckContext } from '../DeckContext'
import { Card } from './Card'
import { AntDesign } from '@expo/vector-icons';

export const QScreen = ({ navigation, route }) => {

    const { decks, setScore } = useContext(DeckContext)

    const { dName } = route.params

    const [qNum, setqNum] = useState(0)

    const handleCorrect = () => {
        setScore(score => score + 1)
        
        if(qNum + 1 === decks[dName].questions.length) {
            setqNum(prevqNum => 0)
            navigation.navigate("Final Score", { dName })
        }
        setqNum(qNum => qNum + 1)
    }
    
    const handleIncorrect = () => {
        
        if(qNum + 1 === decks[dName].questions.length) {
            setqNum(prevqNum => 0)
            navigation.navigate("Final Score", { dName })
        }
        setqNum(qNum => qNum + 1)
    }

    return(
        <View style={styles.container}>
            <Card>
                {(qNum < decks[dName].questions.length) &&
                    <Text style={styles.text}>{decks[dName].questions[qNum].question}</Text>}

                <Pressable style={styles.button} onPress={() => navigation.navigate("Answer", { dName, qNum } )}>
                    <Text>
                        See Answer
                    </Text>
                </Pressable>

                <Pressable style={[styles.button, {flexDirection: 'row'}]} onPress={handleCorrect}>
                    <Text>
                        Correct
                    </Text>
                    <AntDesign name="check" size={24} color="black" />
                </Pressable>


                <Pressable style={[styles.button, {flexDirection: 'row'}]} onPress={handleIncorrect}>
                    <Text>
                        inCorrect
                    </Text> 
                    <AntDesign name="close" size={24} color="black" />
                </Pressable>

                {decks[dName].questions.length - qNum !== 1 ? 
                <Text style={styles.text}>{`you have ${decks[dName].questions.length - qNum} questions left to answer including this one`}</Text>
                : <Text style={styles.text}>You have 1 more question to answer including this one</Text>}
            </Card>
        </View>
    )

}