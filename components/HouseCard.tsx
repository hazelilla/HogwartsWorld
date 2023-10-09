import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { View, Text, Typography } from 'react-native-ui-lib';
import DetailsModal from '../modals/DetailsModal';
import TextLine from '../components/TextLine';

Typography.loadTypographies({
    type: { fontSize: 30, color: 'black', fontFamily: "Caveat-Bold" }
});

const HouseCard = ({ name, houseColours, founder, animal, element, ghost, commonRoom, id }
    : {
        name: string,
        houseColours: string,
        founder: string,
        animal: string,
        element: string,
        ghost: string,
        commonRoom: any,
        id: number
    }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View marginH-25 paddingV-30 marginB-20 center style={styles.container}>

            <Text title marginB-10>{name}</Text>

            <View center>

                <View marginL-10 style={{}}>

                    <TextLine type="Color:" text={houseColours}/>
                    <TextLine type="Founder:" text={founder}/>
                    <TextLine type="Animal:" text={animal}/>
                    <TextLine type="Element:" text={element}/>
                    <TextLine type="Ghost:" text={ghost}/>
                    <TextLine type="Room:" text={commonRoom}/>

                    <View>
                        {modalVisible && (
                            < DetailsModal
                                visible={true}
                                hideModal={() => setModalVisible(false)}
                                id={id}
                            />
                        )}
                        <TouchableOpacity
                            onPress={() => { setModalVisible(true); }}
                            style={styles.touchable}>
                            <View>
                                <Text type>Heads...</Text>
                                <Text type>Traits...</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        opacity: 0.8,
        borderRadius: 20
    },

    touchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        marginTop: 20
    }
});
export default HouseCard;