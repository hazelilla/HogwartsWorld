import React, { useEffect } from "react";
import { ImageBackground, FlatList, SafeAreaView } from "react-native";
import { View } from 'react-native-ui-lib';
import Header from "../components/Header"; 
import HouseCard from "../components/HouseCard";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { getHouses, setHouses } from "../slices/HouseSlice";
import globalStyling from "../assets/style/globalStyling";

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
            style={globalStyling.imageBackground}
            resizeMode="cover"
            source={require('../assets/images/house.jpg')}>
            <SafeAreaView style={globalStyling.flex}>

                <Header title="HOUSES" />

                <View flex>
                    <FlatList
                        scrollEnabled={true}
                        data={housesOfRedux}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <HouseCard
                                name={item.name}
                                houseColours={item.houseColours}
                                founder={item.founder}
                                animal={item.animal}
                                element={item.element}
                                ghost={item.ghost}
                                commonRoom={item.commonRoom}
                                heads={item.heads}
                                traits={item.traits}
                            />
                        )}
                    />

                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default HomeScreen;