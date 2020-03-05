import React, { useEffect, useState } from 'react'

import Datatable from "@Components/Common/Datatable";
import { GenericFilter } from '@Components/Common/Filter';
import { CustomContainerDatatable } from "@Components/Custom/Container";
import { EpisodesTableColumns } from "@Constants/EpisodesTableColumns";
import { EpisodesFilterOptions } from '@Constants/FilterOptions';

import { GetAllEpisodes } from "../../../apiClients/RickAndMorty";
import { IEpisode } from "../../../types/episode";
import { responseToEpisodes } from '../../../utils/mappers/responseToEpisodes';

const EpisodesScreen = () => {

    const [allEpisodes, setAllEpisodes] = useState([] as IEpisode[]);
    const [episodes, setEpisodes] = useState([] as IEpisode[]);

    useEffect(() => {
        //Forced call to get data from API
        //TODO: Use sagas
        const fetchEpisodes = async () => {
            let episodeCollection: IEpisode[] = responseToEpisodes((await GetAllEpisodes()));
            setAllEpisodes(episodeCollection);
            setEpisodes(episodeCollection);
        };
        fetchEpisodes();
    }, []);


    return (

        <CustomContainerDatatable>

            <GenericFilter setTopics={setEpisodes} allTopics={allEpisodes} filterOptions={EpisodesFilterOptions} />

            {episodes &&
                <Datatable columns={EpisodesTableColumns} rows={episodes} topic={"episodes"} />
            }
        </CustomContainerDatatable>
    );
};

export default EpisodesScreen