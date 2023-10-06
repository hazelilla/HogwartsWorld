import React, { useEffect } from "react";
import { FlatList, ImageBackground, SafeAreaView } from "react-native";
import { View } from 'react-native-ui-lib';
import Header from "../components/Header";
import SpellCard from "../components/SpellCard";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { getSpell, setSpell } from "../slices/SpellSlice";
import globalStyling from "../assets/style/globalStyling";

const SpellsScreen = () => {

    const spellOfRedux = useSelector(getSpell);
    const dispatch = useDispatch();

    useEffect(() => {
        getSpells();
    }, []);

    const getSpells = async () => {
        try {
            const response = await axios.get('/Spells');
            dispatch(setSpell(response.data));
        } catch (err) {
            console.log('spells error', err);
        }
    }

    return (
        <ImageBackground
            style={globalStyling.imageBackground}
            resizeMode="cover"
            source={require('../assets/images/HP.jpg')}>

            <SafeAreaView style={globalStyling.flex}>

                <Header title="SPELLS" />

                <View flex>
                    <FlatList
                        scrollEnabled={true}
                        data={spellOfRedux}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <SpellCard
                                name={item.name}
                                incantation={item.incantation}
                                effect={item.effect}
                                type={item.type}
                                light={item.light}
                            />
                        )}
                    />

                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SpellsScreen;