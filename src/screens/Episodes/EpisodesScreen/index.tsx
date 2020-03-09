import React, {useEffect, useState} from 'react'

import Datatable from "@Components/Common/Datatable";
import {GenericFilter} from '@Components/Common/Filter';
import {CustomContainerDatatable, CustomContainerRaw} from "@Components/Custom/Container";
import {EpisodesTableColumns} from "@Constants/EpisodesTableColumns";
import {EpisodesFilterOptions} from '@Constants/FilterOptions';

import {GetAllEpisodes} from "../../../apiClients/RickAndMorty";
import {IEpisode} from "../../../types/episode";
import {responseToEpisodes} from '../../../utils/mappers/responseToEpisodes';
import {TransitionsModal} from "@Components/Common/Modal";
import {ComplexFilter} from "@Components/Common/ComplexFilter";
import {EpisodeCriteria, ValuesEpisodesCriteria} from "@Constants/episodes";
import {CustomGridCenterItems} from "@Components/Custom/Grid";
import {CustomTitle} from "@Components/Custom/Text";

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

        <CustomContainerRaw key={1}>
            <CustomTitle>
                List of all Episodes
            </CustomTitle>

            <CustomContainerDatatable>

                <CustomGridCenterItems xs={12}>

                    <GenericFilter setTopics={setEpisodes} allTopics={allEpisodes}
                                   filterOptions={EpisodesFilterOptions}/>

                    <TransitionsModal button={"Complex Filter"} title={"Complex Filter"}>
                        <ComplexFilter topicCriteria={EpisodeCriteria} initialValues={ValuesEpisodesCriteria}/>
                    </TransitionsModal>

                </CustomGridCenterItems>

                {episodes &&
                <Datatable columns={EpisodesTableColumns} rows={episodes} topic={"episodes"}/>
                }
            </CustomContainerDatatable>
        </CustomContainerRaw>
    );
};

export default EpisodesScreen