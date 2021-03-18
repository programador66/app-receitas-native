import React from 'react';
import styled from 'styled-components/native';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const TabArea = styled.View`
  height: 60px;
  background-color: #FF4500;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 35px;
  border: 3px solid #FF4500;
  margin-top: -20px;
`;

const CustomTabBar = ({state,navigation}) => {
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <SimpleLineIcons style={{opacity: state.index === 0 ? 1 : 0.5}} name="home" size={24} color="white" />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Search')}>
                <Octicons name="search" size={30} color="#FF4500" />
            </TabItemCenter>
            <TabItem onPress={() => goTo('About')}>
                <AntDesign style={{opacity: state.index === 2 ? 1 : 0.5}} name="questioncircleo" size={24} color="white" />
            </TabItem>
        </TabArea>
    );
}

export default CustomTabBar;