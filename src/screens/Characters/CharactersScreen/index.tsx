import React, {useEffect, useState} from 'react'

import CardItem from '@Components/Common/CardItem'
import {CustomContainerRaw} from '@Components/Custom/Container'
import {CustomGridCenterItems} from '@Components/Custom/Grid';
import {CustomPaginator} from '@Components/Custom/Paginator';
import {CustomTitle} from '@Components/Custom/Text'
import {Grid} from '@material-ui/core'
import {ICharacter} from '@Types/character'
import {formatDescription} from '@Utils/formatDescription'
import {fetchCharacters, fetchFilteredCharacters} from "@Store/actions/characters";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCharacters, getTotalPages, ICharacterState} from "@Store/reducers/characters";
import {RootState} from "@Store/reducers";
import {GenericFilter} from "@Components/Common/Filter";
import {CharactersFilterOptions} from "@Constants/FilterOptions";
import {TransitionsModal} from "@Components/Common/Modal";
import {CharacterCriteria, ValuesCharactersCriteria} from "@Constants/characters";
import {valuesToFilterCharacter} from "@Utils/mappers/valuesToFilterCharacter";

const CharactersScreen = () => {

    const dispatch = useDispatch();
    const charactersState: ICharacterState = useSelector((state: RootState) => state.charactersState);
    const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>([]);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, []);

    useEffect(() => {
        setFilteredCharacters(getCurrentCharacters(charactersState));
    }, [getCurrentCharacters(charactersState)]);

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
                <CustomGridCenterItems>
                    <TransitionsModal button={"Complex Filter"} title={"Complex Filter"}
                                      topicCriteria={CharacterCriteria} initialValues={ValuesCharactersCriteria}
                                      formatter={valuesToFilterCharacter} fetch={fetchFilteredCharacters}/>
                </CustomGridCenterItems>

                <Grid container spacing={4}>

                    {filteredCharacters &&
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
                    <CustomPaginator count={getTotalPages(charactersState)} variant="outlined"
                                     onChange={handleChange}
                                     showFirstButton showLastButton/>
                </CustomGridCenterItems>

            </CustomContainerRaw>
        </>

    )
};

export default CharactersScreen