import React from 'react';
import { View, StyleSheet } from 'react-native'

export const Card = (props) => {
    return( 
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        maxWidth: "90%",
        alignItems: "center",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 30,
        marginHorizontal: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "center"

    }
})