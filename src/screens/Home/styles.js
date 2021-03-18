import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
`;

export const TopArea = styled.SafeAreaView`
    height: 30%;
    background-color: #FF4500;
    justify-content: center;
    align-items: center;
`;

export const BottomArea = styled.ScrollView`
    background-color: white;
    flex:1;
`;


export const TextTitleOpacity = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 14px;
    opacity: 0.5;
`;

export const TextTitle = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 14px;
`;

export const LocationArea = styled.View`
   background-color: white;
   height: 40px;
   width: 90%;
   border-radius: 30px;
   flex-direction: row;
   align-items: center;
   padding-left: 30px;
   padding-right: 30px;
   margin-top: 30px; 
`;

export const SearchInput = styled.Text`
   flex: 1;
   font-size: 16px;
   color: #FF4500;
`;

export const ButtomSearch = styled.TouchableOpacity`

`;