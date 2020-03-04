import React, { useEffect, useState } from 'react'

import { Grid } from '@material-ui/core'

import { GetAllCharacters } from '../../../apiClients/RickAndMorty'
import CardItem from '../../../components/Common/CardItem'
import { CustomContainerRaw } from '../../../components/Custom/Container'
import { CustomGridCenterItems } from '../../../components/Custom/Grid';
import { CustomPaginator } from '../../../components/Custom/Paginator';
import { CustomTitle } from '../../../components/Custom/Text'
import { ICharacter } from '../../../types/character'
import { formatDescription } from '../../../utils/formatDescription'

const CharactersScreen = () => {

    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect(() => {

        //Forced call to get data from API
        //TODO: Use sagas
        const fetchCharacters = async () => {
            setCharacters(await (await GetAllCharacters()).data.results)
        }
        fetchCharacters();
        console.log(characters)
    }, [])

    return (
        <CustomContainerRaw key={1}>
            <CustomTitle>
                List of all Characters
            </CustomTitle>

            <Grid container spacing={4} >

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
                <CustomPaginator count={10} variant="outlined" color="inherit" showFirstButton showLastButton />
            </CustomGridCenterItems>

        </CustomContainerRaw>

    )
}

export default CharactersScreen