import React, {useEffect} from 'react'

import Datatable from "@Components/Common/Datatable";
import {EpisodesTableColumns} from "@Constants/EpisodesTableColumns";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/reducers";
import {getEpisodes, IEpisodeState} from "@Store/reducers/episodes";
import {fetchEpisodes} from "@Store/actions/episodes";
import {EpisodesFilterOptions} from "@Constants/FilterOptions";

const EpisodesScreen = () => {
    const dispatch = useDispatch();
    const episodesState: IEpisodeState = useSelector((state: RootState) => state.episodesState);

    useEffect(() => {
        dispatch(fetchEpisodes(episodesState));
    }, []);

    return (
        <>
            {getEpisodes(episodesState).length > 0 && (
                <Datatable columns={EpisodesTableColumns} rows={getEpisodes(episodesState)} topic={"episodes"}
                           filter={EpisodesFilterOptions}/>)}
        </>
    );
};

export default EpisodesScreen