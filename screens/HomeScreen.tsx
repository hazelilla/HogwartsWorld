import React, { useEffect } from "react";
import { Text, View, ImageBackground, FlatList, ScrollView, SafeAreaView } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { getHouses, setHouses } from "../slices/HouseSlice";

const HomeScreen = () => {

    const housesOfRedux = useSelector(getHouses);
    const dispatch = useDispatch();

    useEffect(() => {
        getHousez();
    }, []);

    const getHousez = async () => {
        try {
            const response = await axios.get('/Houses');
            dispatch(setHouses(response.data));
        } catch (err) {
            console.log('houses error', err);
        }
    };


    return (
        <ImageBackground
            style={{ flex: 1, opacity: 0.9 }}
            resizeMode="cover"
            source={require('../assets/images/house.jpg')}>
            <SafeAreaView style={{ flex: 1 }}>

                <Header title="HOUSES" />

                <View>
                    <FlatList
                        scrollEnabled={true}
                        data={housesOfRedux}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <Card
                                name={item.name}
                                houseColours={item.houseColours}
                                founder={item.founder}
                                animal={item.animal}
                                element={item.element}
                                ghost={item.ghost}
                                commonRoom={item.commonRoom}

                            />
                        )}
                    />

                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default HomeScreen;