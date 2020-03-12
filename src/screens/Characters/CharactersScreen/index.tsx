import React, {useEffect, useState} from 'react'

import CardItem from '@Components/Common/CardItem'
import {CustomContainerDatatable, CustomContainerRaw} from '@Components/Custom/Container'
import {CustomGridCenterItems} from '@Components/Custom/Grid';
import {CustomPaginator} from '@Components/Custom/Paginator';
import {CustomTitle} from '@Components/Custom/Text'
import {Grid} from '@material-ui/core'
import {ICharacter} from '../../../types/character'
import {formatDescription} from '../../../utils/formatDescription'
import {fetchCharacters} from "@Store/actions/characters";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCharacters, ICharacterState} from "@Store/reducers/characters";
import {RootState} from "@Store/reducers";
import {GenericFilter} from "@Components/Common/Filter";
import {CharactersFilterOptions} from "@Constants/FilterOptions";

const CharactersScreen = () => {

    const dispatch = useDispatch();
    const charactersState: ICharacterState = useSelector((state: RootState) => state.charactersState);
    const [filteredCharacters, setFilteredCharacters] = useState(getCurrentCharacters(charactersState) as []);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, []);

    const handleChange = (event: object, page: number) => {
        dispatch(fetchCharacters(page));
    };


    return (
        <>
            <CustomTitle>
                List of all Characters
            </CustomTitle>
            <CustomContainerRaw key={1}>

                <GenericFilter setTopics={setFilteredCharacters} allTopics={getCurrentCharacters(charactersState)}
                               filterOptions={CharactersFilterOptions} isFilterTable={false}/>

                <Grid container spacing={4}>

                    {filteredCharacters.length > 0 &&
                    filteredCharacters.map((character: ICharacter, index: number) => (
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
};

export default CharactersScreen