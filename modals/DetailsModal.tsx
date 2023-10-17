import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "../axios";


const DetailsModal = ({ visible, hideModal, id }
    : {
        visible: boolean,
        hideModal: () => void,
        id: number
    }) => {

    const [house, setHouse] = useState<any>(null);

    useEffect(() => {
        getHousesById(id);
    }, [id]);

    const getHousesById = async (id: number) => {
        try {
            const response = await axios.get(`/Houses/${id}`);
            setHouse(response.data);
        } catch (err) {
            console.log('houses by id error', err);
        }
    };

    if (house === null) {
        return null;
    }

    return (
        <View>
            <Modal animationOut={'zoomIn'}
                isVisible={visible}
                statusBarTranslucent={true}>
                <View bg-white padding-30 style={{ borderRadius: 20 }}>

                    <TouchableOpacity
                        onPress={() => {
                            hideModal();
                        }}>
                        <Icon name="close" color="black" size={30} />
                    </TouchableOpacity>

                    <View marginV-30>
                        <View>
                            <Text type>Heads:</Text>
                            <Text text>{house.heads.map((head: any) => `${head.firstName} ${head.lastName}`).join(", ")}</Text>
                        </View>

                        <View>
                            <Text type>Traits:</Text>
                            <Text text>{house.traits.map((trait: any) => trait.name).join(", ")}</Text>
                        </View>
                    </View>

                </View>
            </Modal>
        </View>
    );
};

export default DetailsModal;