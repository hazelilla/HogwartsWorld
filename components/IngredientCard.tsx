import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from 'react-native-ui-lib';


const IngredientCard = ({ name }
    : {
        name: string
    }) => {
    return (
        <View marginH-40 marginB-20 paddingV-15 center style={styles.container}>

            <Text title>{name}</Text>

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
export default IngredientCard;