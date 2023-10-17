import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from 'react-native-ui-lib';


const WizardCard = ({ firstName, lastName, elixirs }
    : {
        firstName: string,
        lastName: string,
        elixirs: { name: string }[]
    }) => {
    return (
        <View marginH-40 padding-20 marginB-20 center style={styles.container}>

            <Text title>{firstName} {lastName}</Text>
            <Text elixir>{elixirs.map((elixir) => elixir.name).join(", ")}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        opacity: 0.8,
        borderRadius: 20
    }
});
export default WizardCard;