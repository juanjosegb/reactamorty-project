import React, {useEffect, useState} from 'react'

import {CenterContainer} from '@Custom/Container';
import {CustomIcon} from '@Custom/Icon';
import {BlockPaper} from '@Custom/Paper';
import {Divider, IconButton, InputBase} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {getCurrentPage, ICharacterState} from "@Store/reducers/characters";
import {useSelector} from "react-redux";
import {RootState} from "@Store/reducers";

export const GenericFilter = (props: any) => {

    const DEFAULT_FILTER_INPUT = "";
    const {allTopics, setTopics, setPages, filterOptions, isFilterTable} = props;
    const [inputValue, setinputValue] = useState(DEFAULT_FILTER_INPUT);
    const [currentFilter, setCurrentFilter] = useState({index: 0, filter: filterOptions[0]});
    const charactersState: ICharacterState = useSelector((state: RootState) => state.charactersState);

    useEffect(() => {
        setinputValue(DEFAULT_FILTER_INPUT);
    }, [getCurrentPage(charactersState)]);

    const applyFilterCriteria = () => {
        if (inputValue !== DEFAULT_FILTER_INPUT) {
            let newFilter =
                [...allTopics].filter(topic =>
                    topic[currentFilter.filter].toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
                );
            setTopics(newFilter);
        } else {
            setTopics(allTopics);
        }
        if(isFilterTable){
            setPages(0);
        }
    };

    const swapFilter = () => {
        setinputValue(DEFAULT_FILTER_INPUT);
        setTopics(allTopics);
        setCurrentFilter({
            index: (currentFilter.index + 1) % filterOptions.length,
            filter: filterOptions[(currentFilter.index + 1) % filterOptions.length]
        })
    };

    return (

        <CenterContainer>
            <BlockPaper component="form">

                <CustomIcon aria-label="search">
                    <SearchIcon/>
                </CustomIcon>


                <InputBase
                    value={inputValue}
                    onKeyUpCapture={() => applyFilterCriteria()}
                    onChange={(e: any) => setinputValue(e.nativeEvent.srcElement.value)}
                    placeholder={"Filter by " + currentFilter.filter}
                    inputProps={{'aria-label': 'search google maps'}}
                />

                <IconButton onClick={() => {
                    swapFilter()
                }} aria-label="menu">
                    <MenuIcon/>
                </IconButton>

                <Divider orientation="vertical"/>
            </BlockPaper>
        </CenterContainer>
    );
};