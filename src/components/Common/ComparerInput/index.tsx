import React, {useState} from 'react'

import {CenterContainer} from '@Custom/Container';
import {CustomIcon} from '@Custom/Icon';
import {BlockPaper} from '@Custom/Paper';
import {Divider, IconButton, InputBase} from '@material-ui/core';
import CompareIcon from '@material-ui/icons/Compare';
import AddIcon from '@material-ui/icons/Add';

export const Comparer = (props: any) => {

    const DEFAULT_FILTER_INPUT = "";
    const [inputValue, setinputValue] = useState(DEFAULT_FILTER_INPUT);

    const compare = () => {
        console.log("compare")
    };

    const addCharacterToComparer = () => {
        console.log("add to comparer")
    };

    return (

        <CenterContainer>
            <BlockPaper component="form">

                <CustomIcon onClick={() => {
                    addCharacterToComparer()
                }} aria-label="add">
                    <AddIcon/>
                </CustomIcon>


                <InputBase
                    value={inputValue}
                    onKeyUpCapture={() => addCharacterToComparer()}
                    onChange={(e: any) => setinputValue(e.target.value)}
                    placeholder={"Comparer VS"}
                />

                <IconButton onClick={() => {
                    compare()
                }} aria-label="menu">
                    <CompareIcon/>
                </IconButton>

                <Divider orientation="vertical"/>
            </BlockPaper>
        </CenterContainer>
    );
};