import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Typography } from 'react-native-ui-lib';

Typography.loadTypographies({
    title: { fontSize: 45, color: "white", fontWeight: "bold"}
});

const Header = ({ title }: { title: string }) => {
    return (
        <View bg-black marginV-30 marginH-50 style={styles.container}>
            <Text title center>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        opacity: 0.8,
        borderRadius: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
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

export default Header;

