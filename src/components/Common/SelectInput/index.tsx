import React, {useEffect, useRef, useState} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {CustomFormControl} from "@Components/Custom/FormControl";
import {FieldInputProps} from "formik";

export type Props = { label: string, options: string[], field: FieldInputProps<any> };

export const SelectInput = (props: Props) => {
    const {options} = props;
    const {label} = props;
    const {field} = props;

    const inputLabel = useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    return (
        <CustomFormControl variant="outlined">
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                {label}
            </InputLabel>
            <Select
                labelId="select-input-label"
                id="select-input"
                value={field.value}
                {...field}
                labelWidth={labelWidth}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {options.map((value: string, key: number) => (
                    <MenuItem key={key} value={value}>{value}</MenuItem>
                ))}
            </Select>
        </CustomFormControl>
    );
};