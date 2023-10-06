import React, { useEffect } from "react";
import { Text, View, ImageBackground, SafeAreaView, FlatList } from "react-native";
import Header from "../components/Header";
import WizardCard from "../components/WizardCard";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { getHouses, setHouses } from "../slices/HouseSlice";

const WizardsScreen = () => {

    const wizardsOfRedux = useSelector(getHouses);
    const dispatch = useDispatch();

    useEffect(() => {
        getWizards();
    }, []);

    const getWizards = async () => {
        try {
            const response = await axios.get('/Wizards');
            dispatch(setHouses(response.data));
        } catch (err) {
            console.log('wizards error', err);
        }
    }

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
                        data={wizardsOfRedux}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <WizardCard
                                firstName={item?.firstName}
                                lastName={item?.lastName}
                            />
                        )}
                    />

                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default WizardsScreen;