import React, { useEffect } from "react";
import { FlatList, ImageBackground, SafeAreaView } from "react-native";
import { View } from 'react-native-ui-lib';
import Header from "../components/Header";
import IngredientCard from "../components/IngredientCard";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients, setIngredient } from "../slices/IngredientSlice";
import globalStyling from "../assets/style/globalStyling";

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
            style={globalStyling.imageBackground}
            resizeMode="cover"
            source={require('../assets/images/ingredient.jpg')}>


            <SafeAreaView style={globalStyling.flex}>

                <Header title="INGREDIENTS" />

                <View flex>
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