import React, {useEffect} from 'react'

import Datatable from "@Components/Common/Datatable";
import {EpisodesTableColumns} from "@Constants/EpisodesTableColumns";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/reducers";
import {getEpisodes, IEpisodeState} from "@Store/reducers/episodes";
import {fetchEpisodes, fetchFilteredEpisodes} from "@Store/actions/episodes";
import {EpisodesFilterOptions} from "@Constants/FilterOptions";
import {CustomTitle} from "@Custom/Text";
import {CustomGridCenterItems} from "@Custom/Grid";
import {TransitionsModal} from "@Components/Common/Modal";
import {EpisodeCriteria, ValuesEpisodesCriteria} from "@Constants/episodes";
import {valuesToFilterEpisode} from "@Utils/mappers/valuesToFilterEpisode";

const EpisodesScreen = () => {
    const dispatch = useDispatch();
    const episodesState: IEpisodeState = useSelector((state: RootState) => state.episodesState);

    useEffect(() => {
        dispatch(fetchEpisodes(episodesState));
    }, []);

    return (
        <>
            <CustomTitle>
                List of all Episodes
            </CustomTitle>
            <CustomGridCenterItems>
                <TransitionsModal button={"Complex Filter"} title={"Complex Filter"} topicCriteria={EpisodeCriteria}
                                  initialValues={ValuesEpisodesCriteria} formatter={valuesToFilterEpisode}
                                  fetch={fetchFilteredEpisodes}/>
            </CustomGridCenterItems>
            {getEpisodes(episodesState).length > 0 && (
                <Datatable columns={EpisodesTableColumns} rows={getEpisodes(episodesState)} topic={"episodes"}
                           filter={EpisodesFilterOptions}/>)}
        </>
    );
};

export default EpisodesScreen