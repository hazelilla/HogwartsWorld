import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Typography } from "react-native-ui-lib";
import { ScreenProp } from '../types';
import globalStyling from "../assets/style/globalStyling";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Typography.loadTypographies({
    board: { fontSize: 90, color: "silver", fontFamily: "Caveat-Bold" }
});

const OnBoardingScreen = ({ navigation }: ScreenProp) => {

    const handleNavigation = () => { navigation.navigate('Home') };

    return (
        <ImageBackground
            style={globalStyling.flex}
            resizeMode="cover"
            source={require('../assets/images/Harry.jpg')}>

            <Text center board marginT-35> Alohomora </Text>

            <TouchableOpacity onPress={handleNavigation} style={{ alignItems: "center", }}>
                <View bg-white style={styles.container}>
                    <View bg-white style={styles.wrapper}>
                        <Icon name={"magic-staff"} size={90} color={"goldenrod"} />
                    </View>
                </View>

            </TouchableOpacity>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        alignItems: 'center',
        width: "35%",
        height: "35%",
        opacity: 0.7
    },

    wrapper: {
        borderRadius: 10,
        alignItems: 'center',
        width: "90%",
        height: "90%",
    }
});

export default OnBoardingScreen;