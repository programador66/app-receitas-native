import React from 'react';
import styled from 'styled-components/native';

//card component
export const ImagemCard = styled.Image`
   width: 88px;
   height: 88px;
`;

export const Card = styled.View`
   background-color: white;
   border: 1px solid #d3d3d3;
   margin-bottom: 20px;
   border-radius: 7px;
   padding: 15px;
   margin: 4px;
   flex-direction: row;
`;

export const ContainerCard = styled.View`
    padding: 8px;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const TitleCardImage = styled.Text`
    font-size: 15px;
    color: black;
`;

export const SubTitleCardImage = styled.Text`
    font-size: 12px;
    color: black;
`;

export const TitleLink = styled.Text`
    font-size: 12px;
    color: blue;
    text-decoration: underline;
`;

const CardRecipes = () => {
    return (
        <Card>
            <ImagemCard source={{uri: "https://www.oyorooms.com/br/fiquedeoyo/wp-content/uploads/2020/01/receitas-750x430-1.jpg"}} />
            <ContainerCard>
                <TitleCardImage>Greek Omelet with Feta</TitleCardImage>
                <SubTitleCardImage> Ingredients: eggs - feta chesse - garlic - red onions - spinach</SubTitleCardImage>
                <TitleLink>https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif</TitleLink>
            </ContainerCard>
        </Card>
    );
}

export default CardRecipes;