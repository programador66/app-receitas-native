import React, { useRef, useEffect } from 'react';
import { Modalize } from 'react-native-modalize';


import { Text, View } from 'react-native';

const ModalizeSearch = ({open}) => {
    const modalizeRef = useRef(null);


    const openModalize = () => {
            console.log(open)
        if (open) {
            modalizeRef.current?.open();
        }
        
    }

    useEffect(() => {
        console.log(open);
        openModalize();
    },[open])

    return (
        <Modalize
            ref={modalizeRef}
            snapPoint={450}
            modalHeight={500}
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