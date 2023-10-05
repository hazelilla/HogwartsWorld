import React from "react";
import { FlatList, ImageBackground, SafeAreaView, Text, View } from "react-native";
import Header from "../components/Header";
import IngredientCard from "../components/IngredientCard";

const IngredientsScreen = () => {
    const ingredients = [
        {
            id: 1,
            name: "Domates"
        },
        {
            id: 2,
            name: "Biber"
        },
        {
            id: 3,
            name: "Patlican"
        },
        {
            id: 4,
            name: "Sogan"
        },
    ]
    return (
        <ImageBackground
            style={{ flex: 1, opacity: 0.9 }}
            resizeMode="cover"
            source={require('../assets/images/ingredient.jpg')}>


            <SafeAreaView style={{ flex: 1 }}>

                <Header title="INGREDIENTS" />

                <View style={{ flex: 1 }}>
                    <FlatList
                        scrollEnabled={true}
                        data={ingredients}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <IngredientCard
                                name={item.name}

                            />
                        )}
                    />

                </View>
            </SafeAreaView>

        </ImageBackground>
    );
};

export default IngredientsScreen;