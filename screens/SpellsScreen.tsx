import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Header from "../components/Header";

const SpellsScreen = () => {
    return (
        <ImageBackground
            style={{ flex: 1, opacity: 0.9 }}
            resizeMode="cover"
            source={require('../assets/images/HP.jpg')}>
            <Header title="SPELLS" />
        </ImageBackground>
    );
};

export default SpellsScreen;