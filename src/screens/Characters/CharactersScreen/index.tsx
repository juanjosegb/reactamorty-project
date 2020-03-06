import React, {useEffect, useState} from 'react'

import {Grid} from '@material-ui/core'

import {GetAllCharacters} from '../../../apiClients/RickAndMorty'
import CardItem from '@ComponentsCommon/CardItem'
import {GenericFilter} from '@ComponentsCommon/Filter'
import {CustomContainerRaw} from '@ComponentsCustom/Container'
import {CustomGridCenterItems} from '@ComponentsCustom/Grid';
import {CustomPaginator} from '@ComponentsCustom/Paginator';
import {CustomTitle} from '@ComponentsCustom/Text'
import {CharactersFilterOptions} from '../../../constants/FilterOptions'
import {ICharacter} from '../../../types/character'
import {formatDescription} from '../../../utils/formatDescription'
import {TransitionsModal} from "@ComponentsCommon/Modal";
import {ComplexFilter} from "@ComponentsCommon/ComplexFilter";

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
        };
        fetchCharacters();
    }, []);


    return (
        <CustomContainerRaw key={1}>
            <CustomTitle>
                List of all Characters
            </CustomTitle>

            <CustomGridCenterItems xs={12}>
                <GenericFilter setTopics={setCharacters} allTopics={pageCharacters}
                               filterOptions={CharactersFilterOptions}/>

                <TransitionsModal button={"Complex Filter"} title={"Complex Filter"}>
                    <ComplexFilter/>
                </TransitionsModal>
            </CustomGridCenterItems>

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
                <CustomPaginator count={10} variant="outlined" color="inherit" showFirstButton showLastButton/>
            </CustomGridCenterItems>

        </CustomContainerRaw>

    )
};

export default CharactersScreen