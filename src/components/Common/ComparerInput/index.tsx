import React, {useEffect, useState} from 'react'

import {CenterContainer} from '@Custom/Container';
import {InlinePaper} from '@Custom/Paper';
import {Checkbox, Divider, TextField} from '@material-ui/core';
import {Autocomplete} from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {ICharacter} from "@Types/character";
import {GetAllCharacters} from "@ApiClients/RickAndMorty";
import {CustomAttributeComparer} from "@Custom/Text";

export const Comparer = (props: any) => {
    const [characters, setCharacters] = useState<ICharacter[]>({} as ICharacter[]);
    const [selectedCheckbox, setSelectedCheckbox] = useState<ICharacter[]>([]);
    const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
    const checkedIcon = <CheckBoxIcon fontSize="small"/>;

    useEffect(() => {
        let characters = GetAllCharacters(1).then(
            response => {
                setCharacters(response.data.results)
            }
        );
    }, []);

    return (

        <CenterContainer>
            <InlinePaper component="form">
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={characters}
                    getOptionDisabled={(value: ICharacter) => {
                        return selectedCheckbox.length > 1
                    }}
                    onChange={(event: object, value: any) => {
                        setSelectedCheckbox(value);
                    }}
                    getOptionLabel={option => option.name}
                    renderOption={(option, {selected}) => (
                        <>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{marginRight: 8}}
                                checked={selected}
                            />
                            {option.name}
                            <CustomAttributeComparer>
                                &nbsp;
                                {option.status && option.status + " . "}
                                {option.species && option.species + " . "}
                                {option.type && option.type + " . "}
                                {option.gender}
                            </CustomAttributeComparer>
                        </>
                    )}
                    style={{width: 800}}
                    renderInput={params => (
                        <TextField {...params} variant="outlined" label="Choose a character..."
                                   placeholder="Choose a character..."/>
                    )}
                />

                <Divider orientation="vertical"/>
            </InlinePaper>
        </CenterContainer>
    );
};