import React from "react";
import { Text, View, StyleSheet } from "react-native";


const Card = ({ name, houseColours, founder, animal, element, ghost, commonRoom, }
    : { name: string, houseColours: string, founder: string, animal: string, element: string, ghost: string, commonRoom: any }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{name}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginRight: 5, paddingHorizontal: 3 }}>
                    <Text style={styles.type}>Color:</Text>
                    <Text style={styles.type}>Founder:</Text>
                    <Text style={styles.type}>Animal:</Text>
                    <Text style={styles.type}>Element:</Text>
                    <Text style={styles.type}>Ghost:</Text>
                    <Text style={styles.type}>Room:</Text>
                </View>

                <View style={{}}>
                    <Text style={styles.text}>{houseColours}</Text>
                    <Text style={styles.text}>{founder}</Text>
                    <Text style={styles.text}>{animal}</Text>
                    <Text style={styles.text}>{element}</Text>
                    <Text style={styles.text}>{ghost}</Text>
                    <Text style={styles.text}>{commonRoom}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        opacity: 0.8,
        marginHorizontal: 30,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 30,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
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
export default Card;