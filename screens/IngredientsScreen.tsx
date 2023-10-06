import React, { useEffect } from "react";
import { FlatList, ImageBackground, SafeAreaView, Text, View } from "react-native";
import Header from "../components/Header";
import IngredientCard from "../components/IngredientCard";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients, setIngredient } from "../slices/IngredientSlice";

const IngredientsScreen = () => {
    const ingredientsOfRedux = useSelector(getIngredients);
    const dispatch = useDispatch();

    useEffect(() => {
        getIngredientz();
    }, []);

    const getIngredientz = async () => {
        try {
            const response = await axios.get('/Ingredients');
            dispatch(setIngredient(response.data));
        } catch (err) {
            console.log('ingredients error', err);
        }
    }
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
                        data={ingredientsOfRedux}
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