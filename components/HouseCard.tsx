import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Typography } from 'react-native-ui-lib';

Typography.loadTypographies({
    title: { fontSize: 30, fontWeight: 'bold', color: 'black' },
    text: { fontSize: 23, color: 'black' },
    type: { fontSize: 24, color: 'black', fontWeight: 'bold' }
});

const HouseCard = ({ name, houseColours, founder, animal, element, ghost, commonRoom }
    : {
        name: string,
        houseColours: string,
        founder: string,
        animal: string,
        element: string,
        ghost: string,
        commonRoom: any
    }) => {
    return (
        <View marginH-25 paddingV-30 marginB-20 center style={styles.container}>

            <Text title marginB-10>{name}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginRight: 5, paddingHorizontal: 3 }}>
                    <Text type>Color:</Text>
                    <Text type>Founder:</Text>
                    <Text type>Animal:</Text>
                    <Text type>Element:</Text>
                    <Text type>Ghost:</Text>
                    <Text type>Room:</Text>
                </View>

                <View style={{}}>
                    <Text text>{houseColours}</Text>
                    <Text text>{founder}</Text>
                    <Text text>{animal}</Text>
                    <Text text>{element}</Text>
                    <Text text>{ghost}</Text>
                    <Text text>{commonRoom}</Text>
                </View>
            </View>
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
export default HouseCard;