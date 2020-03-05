import React, { useEffect, useState } from 'react'

import Datatable from "@Components/Common/Datatable";
import { CustomContainerDatatable } from "@Components/Custom/Container";
import { EpisodesTableColumns } from "@Constants/EpisodesTableColumns";

import { GetAllEpisodes } from "../../../apiClients/RickAndMorty";
import { IEpisode } from "../../../types/episode";
import { responseToEpisodes } from '../../../utils/mappers/responseToEpisodes';

const EpisodesScreen = () => {

    const [episodes, setEpisodes] = useState([] as IEpisode[]);

    useEffect(() => {
        //Forced call to get data from API
        //TODO: Use sagas
        const fetchEpisodes = async () => {
            setEpisodes(responseToEpisodes((await GetAllEpisodes())))
        };
        fetchEpisodes();
    }, []);


    return (

        <CustomContainerDatatable>

            {episodes &&
                <Datatable columns={EpisodesTableColumns} rows={episodes} topic={"episodes"} />
            }
        </CustomContainerDatatable>
    );
};

export default EpisodesScreen