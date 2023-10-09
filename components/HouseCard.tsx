import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Typography } from 'react-native-ui-lib';

Typography.loadTypographies({
    title: { fontSize: 40, fontFamily: "Caveat-Bold", color: 'black' },
    text: { fontSize: 30, color: 'black', fontFamily: "Caveat-Regular" },
    type: { fontSize: 35, color: 'black', fontFamily: "Caveat-Bold" }
});

const HouseCard = ({ name, houseColours, founder, animal, element, ghost, commonRoom, heads, traits }
    : {
        name: string,
        houseColours: string,
        founder: string,
        animal: string,
        element: string,
        ghost: string,
        commonRoom: any,
        heads: { firstName: string, lastName: string }[],
        traits: { name: string }[]
    }) => {
    return (
        <View marginH-25 paddingV-30 marginB-20 center style={styles.container}>

            <Text title marginB-10>{name}</Text>

            <View center>

                <View marginL-10 style={{}}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text type marginR-10>Color:</Text>
                        <Text text>{houseColours}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text type marginR-10>Founder:</Text>
                        <Text text>{founder}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text type marginR-10>Animal:</Text>
                        <Text text>{animal}</Text>
                    </View>

                    <View style={{ flexDirection: 'row'}}>
                        <Text type marginR-10>Element:</Text>
                        <Text text>{element}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text type marginR-10>Ghost:</Text>
                        <Text text>{ghost}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text type marginR-10>Room:</Text>
                        <Text text>{commonRoom}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: "80%" }}>
                        <Text type marginR-10>Heads:</Text>
                        <Text text>{heads.map((head, index) => `${head.firstName} ${head.lastName}`).join(", ")}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: "80%" }}>
                        <Text type marginR-10>Traits:</Text>
                        <Text text>{traits.map((trait, index) => trait.name).join(", ")}</Text>
                    </View>

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