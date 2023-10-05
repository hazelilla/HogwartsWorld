import React from "react";
import { Text, View, StyleSheet } from "react-native";


const WizardCard = ({ firstName, lastName }
    : {
        firstName: string,
        lastName: string
    }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{firstName}</Text>
            <Text style={styles.title}>{lastName}</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        opacity: 0.8,
        marginHorizontal: 40,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        fontSize: 23,
        color: 'black'
    },

    type: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
});
export default WizardCard;