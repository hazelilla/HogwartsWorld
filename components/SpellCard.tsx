import React from "react";
import { Text, View, StyleSheet } from "react-native";


const SpellCard = ({ name, incantation, effect, canBeVerbal, type, light, creator }
    : {
        name: string,
        incantation: string,
        effect: string,
        canBeVerbal: boolean,
        type: any,
        light: any,
        creator: string
    }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{name}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginRight: 5, paddingHorizontal: 3 }}>
                    <Text style={styles.type}>Incantation:</Text>
                    <Text style={styles.type}>Effect:</Text>
                    <Text style={styles.type}>Verbal:</Text>
                    <Text style={styles.type}>Type:</Text>
                    <Text style={styles.type}>Light:</Text>
                    <Text style={styles.type}>Creator:</Text>
                </View>

                <View style={{}}>
                    <Text style={styles.text}>{incantation}</Text>
                    <Text style={styles.text}>{effect}</Text>
                    <Text style={styles.text}>{canBeVerbal}</Text>
                    <Text style={styles.text}>{type}</Text>
                    <Text style={styles.text}>{light}</Text>
                    <Text style={styles.text}>{creator}</Text>
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
export default SpellCard;