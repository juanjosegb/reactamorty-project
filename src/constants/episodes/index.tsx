import {ICriteria} from "../../types/filter";

export const EpisodeCriteria: ICriteria[] = [
    {
        value: "Name",
        type: 'input',
        topic: 'name'
    },
    {
        value: "Episode",
        type: 'input',
        topic: 'episode'
    }
];

export const ValuesEpisodesCriteria = {name: '', episode: ''};