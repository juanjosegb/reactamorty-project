import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {CustomFormControl} from "@ComponentsCustom/FormControl";

export type Props = { label: string, options: string[] };

export const SelectInput = (props: Props) => {
    const {options} = props;
    const {label} = props;
    const [age, setAge] = React.useState('');

    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    return (
        <CustomFormControl variant="outlined">
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                {label}
            </InputLabel>
            <Select
                labelId="select-input-label"
                id="select-input"
                value={age}
                onChange={handleChange}
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