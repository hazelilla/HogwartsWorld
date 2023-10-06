import React, { useEffect } from "react";
import { FlatList, ImageBackground, SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import SpellCard from "../components/SpellCard";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { getSpell, setSpell } from "../slices/SpellSlice";

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
            console.log('wizards error', err);
        }
    }

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