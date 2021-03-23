import React, { useRef, useEffect } from 'react';
import { Modalize } from 'react-native-modalize';


import { Text, View } from 'react-native';

const ModalizeSearch = (props) => {
    const modalizeRef = useRef(null);


    const openModalize = () => {
        if (props.open) {
            modalizeRef.current?.open();
        }    
    }

    useEffect(() => {
        openModalize();
    },[props.open])

    const closeModalize = () => {
        props.handleModalize(false);
    }

    return (
        <Modalize
            ref={modalizeRef}
            snapPoint={500}
            modalHeight={500}
            onClose={closeModalize}
        >
            <View
                style={{ flex: 1, height: 180, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            >
                <Text>hello</Text>
            </View>
        </Modalize>
    )
}

export default ModalizeSearch;