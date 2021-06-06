import React from 'react';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'yellow'
    },
    button: {
      marginVertical: 20,
      borderRadius: 10,
      // color: 'white',
      borderWidth: 2,
      backgroundColor: 'yellow',
      fontSize: 300,
      borderColor: 'black',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 5,
      padding: '2%',
      alignItems: 'center',
    },
    text: {
      marginVertical: 20,
      fontSize: 20,
      textAlign: 'center',
      maxWidth: "80%",
      // borderColor: 'black',
    },
    textInput: {
      maxWidth: '80%',
      width: "70%",
      marginVertical: 20,
      fontSize: 20,
      borderBottomColor: 'black',
      borderWidth: 1,
      borderColor: 'black',
      textAlign: 'center',
    },
})
  
export default styles