import React from "react";
import { Text, View, StyleSheet } from "react-native";


const SpellCard = ({ name, incantation, effect, type, light }
    : {
        name: string,
        incantation: string,
        effect: string
        type: any,
        light: any
    }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title} numberOfLines={2}>{name}</Text>



            <View style={{ alignItems: 'flex-start', width: "70%" }}>
                <View style={{ flexDirection: 'row', width: "80%"}}>
                    <Text style={styles.type} numberOfLines={3}>Incantation:</Text>
                    <Text style={styles.text}>{incantation}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.type} numberOfLines={3}>Effect:</Text>
                    <Text style={styles.text}>{effect}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.type}>Type:</Text>
                    <Text style={styles.text}>{type}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.type}>Light:</Text>
                    <Text style={styles.text}>{light}</Text>
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
        paddingVertical: 30,
        marginBottom: 20,
        width: "95%",
        alignSelf: 'center',
        paddingLeft: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        width: "90%",
        textAlign: 'center',
        marginBottom: 10
    },
    text: {
        fontSize: 23,
        color: 'black',

        marginBottom: 20,
        justifyContent: 'center'
    },

    type: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 20,
        marginRight: 10
    }
});
export default SpellCard;