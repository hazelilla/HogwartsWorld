import React from "react";
import { FlatList, ImageBackground, SafeAreaView, Text, View } from "react-native";
import Header from "../components/Header";
import SpellCard from "../components/SpellCard";

const SpellsScreen = () => {
    const spell = [
        {
            id: 1,
            name: "Ela",
            incantation: "SJjfdj",
            effect: "ksdhsjdh",
            canBeVerbal: true,
            type: "skdks",
            light: "sdj",
            creator: "God"
        },
        {
            id: 2,
            name: "Ela",
            incantation: "SJjfdj",
            effect: "ksdhsjdh",
            canBeVerbal: true,
            type: "skdks",
            light: "sdj",
            creator: "God"
        },
        {
            id: 3,
            name: "Ela",
            incantation: "SJjfdj",
            effect: "ksdhsjdh",
            canBeVerbal: false,
            type: "skdks",
            light: "sdj",
            creator: "God"
        },

    ]
    return (
        <ImageBackground
            style={{ flex: 1, opacity: 0.9 }}
            resizeMode="cover"
            source={require('../assets/images/HP.jpg')}>

            <SafeAreaView style={{ flex: 1 }}>

                <Header title="SPELLS" />

                <View style={{ flex: 1 }}>
                    <FlatList
                        scrollEnabled={true}
                        data={spell}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <SpellCard
                                name={item.name}
                                incantation={item.incantation}
                                effect={item.effect}
                                canBeVerbal={item.canBeVerbal}
                                type={item.type}
                                light={item.light}
                                creator={item.creator}

                            />
                        )}
                    />

                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SpellsScreen;