import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from 'react-native-ui-lib';
import TextLine from '../components/TextLine';


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

                <TextLine type="Incantation:" text={incantation}/>
                <TextLine type="Effect:" text={effect}/>
                <TextLine type="Type:" text={type}/>
                <TextLine type="Light:" text={light}/>

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