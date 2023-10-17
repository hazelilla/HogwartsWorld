import React from "react";
import { View, Text } from 'react-native-ui-lib';


const TextLine = ({ type, text }: { type: string, text: string }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text type marginR-10>{type}</Text>
            <Text text>{text}</Text>
        </View>
    );
};

export default TextLine;

