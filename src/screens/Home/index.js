import React from 'react';
import { Octicons } from '@expo/vector-icons';
import { 
    Container, TextTitle, LocationArea,
    TopArea, BottomArea, SearchInput,
    TextTitleOpacity,
 } from './styles';

import CardRecipes from '../../components/CardRecipies';

const Home = () => {
    const card = [0,1,2,3];

    return (
        <Container>
            <TopArea>
                <TextTitleOpacity>Bem vindo Ao App Bare-foods</TextTitleOpacity>
                <TextTitle>Sempre Perto de Você!</TextTitle>
                <LocationArea>
                    <SearchInput
                        placeholder="Buscar receitas"
                        placeholderTextColor="#FF4500"
                    />
                    <Octicons name="search" size={24} color="#FF4500" />
                </LocationArea>
            </TopArea>
            <BottomArea>
                {
                    card.map(c => (
                        <CardRecipes key={c} />
                    ))
                }
                
            </BottomArea>
        </Container>
    );
}

export default Home;