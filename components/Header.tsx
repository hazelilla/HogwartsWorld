import React from "react";
import { Text, View } from "react-native";

const Header = ({title} : {title: string}) => {
    return (
        <View style={{backgroundColor: "purple", marginVertical: 30, marginHorizontal: 50, borderRadius: 20, opacity: 0.8}}>
            <Text style={{fontSize: 45, textAlign: 'center', color: "white", fontWeight: 'bold'}}>{title}</Text>
        </View>
    );
};

export default Header;