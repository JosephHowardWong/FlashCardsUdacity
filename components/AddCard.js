import React, { useState, useContext } from 'react'
import { 
    Pressable, 
    View, 
    Text, 
    TextInput, 
    TouchableWithoutFeedback, 
    Keyboard,
    KeyboardAvoidingView,
    Platform 
} from 'react-native'
import styles from '../styles'
import { DeckContext } from '../DeckContext'
import { Card } from './Card'


export const AddCard = ({ navigation, route }) => {

    const { decks, setDecks } = useContext(DeckContext)

    const [question, setQuestion] = useState("")

    const [answer, setAnswer] = useState("")

    const { dName } = route.params

    const handleSubmit = () => {

        setDecks(prevDecks => ({...prevDecks, [dName]: { ...prevDecks[dName], questions: [...prevDecks[dName].questions, { question, answer }]}}))

        setQuestion("")
        setAnswer("")

        navigation.navigate("Deck Top", { dName })
    }


    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                <View>
                    <Card>
                        <Text style={styles.text}>Please enter the info for new card</Text>

                        <TextInput style={styles.textInput} placeholder="Enter Question" value={question} onChangeText={text => setQuestion(text)}/>
                        
                        <TextInput style={styles.textInput} placeholder="Enter Answer" value={answer} onChangeText={text => setAnswer(text)}/>
                
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