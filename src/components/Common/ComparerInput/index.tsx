import React, {useEffect, useState} from 'react'

import {CenterContainer} from '@Custom/Container';
import {InlinePaper} from '@Custom/Paper';
import {Checkbox, Divider, TextField} from '@material-ui/core';
import {Autocomplete} from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {ICharacter} from "@Types/character";
import {CustomAttributeComparer} from "@Custom/Text";
import {fetchAllCharacters} from "@Store/actions/characters";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCharacters, ICharacterState} from "@Store/reducers/characters";
import {RootState} from "@Store/reducers";

export const Comparer = (props: any) => {
    const {setFirstCharacter, setSecondCharacter} = props;
    const dispatch = useDispatch();
    const [selectedCheckbox, setSelectedCheckbox] = useState<ICharacter[]>([]);
    const charactersState: ICharacterState = useSelector((state: RootState) => state.charactersState);
    const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
    const checkedIcon = <CheckBoxIcon fontSize="small"/>;

    useEffect(() => {
        dispatch(fetchAllCharacters())
    }, []);

    function handleChange() {
        return (event: object, values: any) => {
            setFirstCharacter(values[0]);
            setSecondCharacter(values[1]);
            setSelectedCheckbox(values);
        };
    }

    function handleOptionDisabled() {
        return (value: ICharacter) => {
            return selectedCheckbox.length > 1
        };
    }

    return (

        <CenterContainer>
            <InlinePaper component="form">
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={getCurrentCharacters(charactersState)}
                    getOptionDisabled={handleOptionDisabled()}
                    onChange={handleChange()}
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