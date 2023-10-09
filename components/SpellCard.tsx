import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Typography } from 'react-native-ui-lib';

Typography.loadTypographies({
    title: { fontSize: 40, fontFamily: "Caveat-Bold", color: 'black' },
    text: { fontSize: 30, fontFamily: "Caveat-Regular" },
    type: { fontSize: 30, color: 'black', fontFamily: "Caveat-Bold" }
});

const SpellCard = ({ name, incantation, effect, type, light }
    : {
        name: string,
        incantation: string,
        effect: string
        type: any,
        light: any
    }) => {
    return (
        <View marginH-30 marginB-20 paddingV-20 paddingL-20 style={styles.container}>

            <Text title center marginB-10 numberOfLines={2}>{name}</Text>

            <View style={{ alignItems: 'flex-start', width: "70%" }}>
                <View style={{ flexDirection: 'row', width: "80%" }}>
                    <Text marginB-20 marginR-10 type numberOfLines={3}>Incantation:</Text>
                    <Text marginB-20 center text>{incantation}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text marginB-20 marginR-10 type numberOfLines={3}>Effect:</Text>
                    <Text marginB-20 center text>{effect}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text marginB-20 marginR-10 type>Type:</Text>
                    <Text marginB-20 center text>{type}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text marginB-20 marginR-10 type>Light:</Text>
                    <Text marginB-20 center text>{light}</Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        opacity: 0.8,
        borderRadius: 20,
        width: "95%",
        alignSelf: 'center',
    }
});
export default SpellCard;