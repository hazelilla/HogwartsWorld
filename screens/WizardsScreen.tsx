import React, { useEffect } from "react";
import { ImageBackground, SafeAreaView, FlatList } from "react-native";
import { View } from 'react-native-ui-lib';
import Header from "../components/Header";
import WizardCard from "../components/WizardCard";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { getWizards, setWizards } from "../slices/WizardSlice";
import globalStyling from "../assets/style/globalStyling";

const WizardsScreen = () => {

    const wizardsOfRedux = useSelector(getWizards);
    const dispatch = useDispatch();

    useEffect(() => {
        getWizardz();
    }, []);

    const getWizardz = async () => {
        try {
            const response = await axios.get('/Wizards');
            dispatch(setWizards(response.data));
        } catch (err) {
            console.log('wizards error', err);
        }
    }

    return (
        <ImageBackground
            style={globalStyling.imageBackground}
            resizeMode="cover"
            source={require('../assets/images/wizard.jpg')}>

            <SafeAreaView style={globalStyling.flex}>

                <Header title="WIZARDS" />

                <View flex>
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