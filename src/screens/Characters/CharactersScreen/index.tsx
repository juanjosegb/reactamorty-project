import React, {useEffect, useState} from 'react'

import CardItem from '@Components/Common/CardItem'
import {CustomContainerRaw} from '@Components/Custom/Container'
import {CustomGridCenterItems} from '@Components/Custom/Grid';
import {CustomPaginator} from '@Components/Custom/Paginator';
import {CustomTitle} from '@Components/Custom/Text'
import {Grid} from '@material-ui/core'
import {ICharacter, IFilterCharacter} from '@Types/character'
import {formatDescription} from '@Utils/formatDescription'
import {fetchFilteredCharacters} from "@Store/actions/characters";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCharacters, getCurrentPage, getTotalPages, ICharacterState} from "@Store/reducers/characters";
import {RootState} from "@Store/reducers";
import {GenericFilter} from "@Components/Common/Filter";
import {CharactersFilterOptions} from "@Constants/FilterOptions";
import {TransitionsModal} from "@Components/Common/Modal";
import {CharacterCriteria, FilterCharacterDefault, ValuesCharactersCriteria} from "@Constants/characters";
import {valuesToFilterCharacter} from "@Utils/mappers/valuesToFilterCharacter";

const CharactersScreen = () => {

    const dispatch = useDispatch();
    const charactersState: ICharacterState = useSelector((state: RootState) => state.charactersState);
    const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>([]);
    const [filteredValues, setFilteredValues] = useState<IFilterCharacter>(FilterCharacterDefault);

    useEffect(() => {
        refreshCharactersByPage(1);
    }, [filteredValues]);

    useEffect(() => {
        setFilteredCharacters(getCurrentCharacters(charactersState));
    }, [getCurrentCharacters(charactersState)]);

    const handleChange = (event: object, page: number) => {
        refreshCharactersByPage(page);
    };

    function refreshCharactersByPage(page: number) {
        filteredValues.page = page;
        setFilteredValues(valuesToFilterCharacter(filteredValues));
        dispatch(fetchFilteredCharacters(filteredValues));
    }

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
                                      setFilteredValues={setFilteredValues}/>
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
                                     showFirstButton showLastButton
                                     page={getCurrentPage(charactersState)}
                    />
                </CustomGridCenterItems>

            </CustomContainerRaw>
        </>

    )
};

export default CharactersScreen