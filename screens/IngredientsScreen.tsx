import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Header from "../components/Header";

const IngredientsScreen = () => {
    return (
        <ImageBackground
            style={{ flex: 1, opacity: 0.9 }}
            resizeMode="cover"
            source={require('../assets/images/ingredient.jpg')}>
            <Header title="INGREDIENTS" />
        </ImageBackground>
    );
};

export default IngredientsScreen;