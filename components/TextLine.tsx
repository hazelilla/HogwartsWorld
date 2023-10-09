import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Typography } from 'react-native-ui-lib';

Typography.loadTypographies({
    text: { fontSize: 30, color: 'black', fontFamily: "Caveat-Regular" },
    type: { fontSize: 30, color: 'black', fontFamily: "Caveat-Bold" }
});

const TextLine = ({ type, text }: { type: string, text: string }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text type marginR-10>{type}</Text>
            <Text text>{text}</Text>
        </View>
    );
};

export default TextLine;

