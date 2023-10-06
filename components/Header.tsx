import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Typography } from 'react-native-ui-lib';

Typography.loadTypographies({
    header: { fontSize: 55, color: "white", fontFamily: "Caveat-Bold" }
});

const Header = ({ title }: { title: string }) => {
    return (
        <View bg-black marginV-30 marginH-50 style={styles.container}>
            <Text header center>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        opacity: 0.8,
        borderRadius: 20
    }
});

export default Header;

