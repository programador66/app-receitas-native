import React, {useState} from 'react';
import { Octicons } from '@expo/vector-icons';
import { 
    Container, TextTitle, LocationArea,
    TopArea, BottomArea, SearchInput,
    TextTitleOpacity, ButtomSearch
 } from './styles';

import CardRecipes from '../../components/CardRecipies';
import Modalize from '../../components/ModalizeSearch';

const Home = () => {

    const [modalize, setModalize] = useState(false); 
    const card = [0,1,2,3];
    
    const handleOpenModalize = () => {
        setModalize(true);
    }

    const  handleCloseModalize = (e) => {
        console.log('----------')
        console.log(e)
        setModalize(false);
    }

    return (
        <Container>
            <TopArea>
                <TextTitleOpacity>Bem vindo Ao App Bare-foods</TextTitleOpacity>
                <TextTitle>Sempre Perto de Você!</TextTitle>
                <LocationArea>
                    <SearchInput
                        onPress={handleOpenModalize}
                    >
                        Burcas receitas
                    </SearchInput>
                    <ButtomSearch>
                        <Octicons name="search" size={24} color="#FF4500" />
                    </ButtomSearch>   
                </LocationArea>
            </TopArea>
            <BottomArea>
                {
                    card.map(c => (
                        <CardRecipes key={c} />
                    ))
                }
                
            </BottomArea>
            <Modalize open={modalize} teste={ (e) => handleCloseModalize(e)} />
        </Container>
    );
}

export default Home;