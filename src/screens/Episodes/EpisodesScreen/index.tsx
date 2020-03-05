import React, {useEffect, useState} from 'react'
import Datatable from "../../../components/Common/Datatable";
import {EpisodesTableColumns} from "../../../constants/EpisodesTableColumns";
import {CustomContainerDatatable} from "../../../components/Custom/Container";
import {GetAllEpisodes} from "../../../apiClients/RickAndMorty";
import {responseToEpisodes} from '../../../utils/mappers/responseToEpisodes';
import {IEpisode} from "../../../types/episode";

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
            <Datatable columns={EpisodesTableColumns} rows={episodes} topic={"episodes"}/>
            }
        </CustomContainerDatatable>
    );
};

export default EpisodesScreen