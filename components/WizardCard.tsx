import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Typography } from 'react-native-ui-lib';

Typography.loadTypographies({
    title: { fontSize: 40, fontFamily: "Caveat-Bold", color: 'black' },
    elixir: { fontSize: 30, fontFamily: "Caveat-Regular"}
});

const WizardCard = ({ firstName, lastName, elixirs }
    : {
        firstName: string,
        lastName: string,
        elixirs: {name: string}[]
    }) => {
    return (
        <View marginH-40 padding-20 marginB-20 center style={styles.container}>

            <Text title>{firstName} {lastName}</Text>
            <Text elixir>{elixirs.map((elixir) => elixir.name).join (", ")}</Text>

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