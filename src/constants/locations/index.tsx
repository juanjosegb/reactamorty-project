import {ICriteria} from "../../types/filter";

export const LocationCriteria: ICriteria[] = [
    {
        value: "Name",
        type: 'input',
        topic: 'name'
    },
    {
        value: "Type",
        type: 'input',
        topic: 'type'
    },
    {
        value: "Dimension",
        type: 'input',
        topic: 'dimension'
    }
];

export const ValuesLocationsCriteria = {name: '', type: '', dimension: ''};