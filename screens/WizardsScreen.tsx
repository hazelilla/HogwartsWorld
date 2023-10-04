import React from "react";
import { Text, View, ImageBackground } from "react-native";
import Header from "../components/Header";

const WizardsScreen = () => {
    return (
        <ImageBackground
            style={{ flex: 1, opacity: 0.9 }}
            resizeMode="cover"
            source={require('../assets/images/wizard.jpg')}>
            <Header title="WIZARDS" />
        </ImageBackground>
    );
};

export default WizardsScreen;