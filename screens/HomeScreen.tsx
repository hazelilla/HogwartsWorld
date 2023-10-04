import React from "react";
import { Text, View, ImageBackground, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";

const HomeScreen = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <ImageBackground
                style={{ flex: 1, opacity: 0.9 }}
                resizeMode="cover"
                source={require('../assets/images/house.jpg')}>

                <Header title="HOUSES" />
                
                <View>
                <View style={{backgroundColor: 'white', opacity: 0.6, marginHorizontal: 40, borderRadius: 20, alignItems: 'center', paddingVertical: 30, marginBottom: 20}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>Perili kosk</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Color: Purple</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Founder: Babam</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Animal: Tiger</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Element: Safir</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Ghost: Casper</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Room: Bedroom</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Traits: Loyalty</Text>
                </View>
                <View style={{backgroundColor: 'white', marginHorizontal: 40, borderRadius: 20, alignItems: 'center', paddingVertical: 30, marginBottom: 20}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>Perili kosk</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Color: Purple</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Founder: Babam</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Animal: Tiger</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Element: Safir</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Ghost: Casper</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Room: Bedroom</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Traits: Loyalty</Text>
                </View>
                <View style={{backgroundColor: 'white', marginHorizontal: 40, borderRadius: 20, alignItems: 'center', paddingVertical: 30, marginBottom: 20}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>Perili kosk</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Color: Purple</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Founder: Babam</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Animal: Tiger</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Element: Safir</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Ghost: Casper</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Room: Bedroom</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>Traits: Loyalty</Text>
                </View>
                </View>
                

                
            </ImageBackground>
        </ScrollView>
    );
};

export default HomeScreen;