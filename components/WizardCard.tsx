import React from "react";
import { Text, View, StyleSheet } from "react-native";


const WizardCard = ({ firstName, lastName }
    : {
        firstName: string,
        lastName: string
    }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{firstName} {lastName}</Text>

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
        padding: 15,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    }
});
export default WizardCard;