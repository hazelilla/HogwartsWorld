import React from "react";
import { Text, View, ImageBackground, SafeAreaView, FlatList } from "react-native";
import Header from "../components/Header";
import WizardCard from "../components/WizardCard";

const WizardsScreen = () => {

    const wizards = [
        {
            id: 1,
            firstName: "Ela",
            lastName: "Lilai"
        },
        {
            id: 2,
            firstName: "SJIDD",
            lastName: "JAHjhjD"
        },
    ]
    return (
        <ImageBackground
            style={{ flex: 1, opacity: 0.9 }}
            resizeMode="cover"
            source={require('../assets/images/wizard.jpg')}>


            <SafeAreaView style={{ flex: 1 }}>

                <Header title="WIZARDS" />

                <View style={{ flex: 1 }}>
                    <FlatList
                        scrollEnabled={true}
                        data={wizards}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <WizardCard
                                firstName={item.firstName}
                                lastName={item.lastName}

                            />
                        )}
                    />

                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default WizardsScreen;