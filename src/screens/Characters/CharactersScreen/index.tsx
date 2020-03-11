import React, {useEffect, useState} from 'react'

import CardItem from '@Components/Common/CardItem'
import {GenericFilter} from '@Components/Common/Filter'
import {CustomContainerRaw} from '@Components/Custom/Container'
import {CustomGridCenterItems} from '@Components/Custom/Grid';
import {CustomPaginator} from '@Components/Custom/Paginator';
import {CustomTitle} from '@Components/Custom/Text'
import {CharactersFilterOptions} from '@Constants/FilterOptions'
import {Grid} from '@material-ui/core'

import {GetAllCharacters} from '../../../apiClients/RickAndMorty'
import {ICharacter} from '../../../types/character'
import {formatDescription} from '../../../utils/formatDescription'

const CharactersScreen = () => {

    const [pageCharacters, setPageCharacters] = useState<ICharacter[]>([]);
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect(() => {

        //Forced call to get data from API
        //TODO: Use sagas
        const fetchCharacters = async () => {
            let pageCharacters: ICharacter[] = await (await GetAllCharacters()).data.results;
            setPageCharacters(pageCharacters);
            setCharacters(pageCharacters);
        }
        fetchCharacters();
    }, [])

    const handleChange = (event: object, page: number) => {
        console.log("Página " + page)
    };


    return (
        <>
            <CustomTitle>
                List of all Characters
            </CustomTitle>
            <CustomContainerRaw key={1}>

                <GenericFilter setTopics={setCharacters} allTopics={pageCharacters}
                               filterOptions={CharactersFilterOptions} isFilterTable={false}/>

                <Grid container spacing={4}>

                    {characters != [] &&
                    characters.map((character: ICharacter, index: number) => (
                        <CardItem
                            key={index}
                            title={character.name}
                            urlToImage={character.image}
                            description={formatDescription(character)}
                            id={character.id}
                            topic={"characters"}
                        />
                    ))
                    }

                </Grid>
                <CustomGridCenterItems xs={12}>
                    <CustomPaginator count={10} variant="outlined" color="inherit" onChange={handleChange}
                                     showFirstButton showLastButton/>
                </CustomGridCenterItems>

            </CustomContainerRaw>
        </>

    )
}

export default CharactersScreen