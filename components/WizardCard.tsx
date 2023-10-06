import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Typography } from 'react-native-ui-lib';

Typography.loadTypographies({
    title: { fontSize: 40, fontFamily: "Caveat-Bold", color: 'black' }
});

const WizardCard = ({ firstName, lastName }
    : {
        firstName: string,
        lastName: string
    }) => {
    return (
        <View marginH-40 padding-15 marginB-20 center style={styles.container}>

            <Text title>{firstName} {lastName}</Text>

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