import React, {useEffect, useState} from 'react'

import Datatable from "@Components/Common/Datatable";
import {EpisodesTableColumns} from "@Constants/EpisodesTableColumns";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/reducers";
import {getEpisodes, IEpisodeState} from "@Store/reducers/episodes";
import {fetchFilteredEpisodes} from "@Store/actions/episodes";
import {EpisodesFilterOptions} from "@Constants/FilterOptions";
import {CustomTitle} from "@Custom/Text";
import {CustomGridCenterItems} from "@Custom/Grid";
import {TransitionsModal} from "@Components/Common/Modal";
import {EpisodeCriteria, FilterEpisodeDefault, ValuesEpisodesCriteria} from "@Constants/episodes";
import {IFilterEpisode} from "@Types/episode";
import {CustomClearIcon} from "@Custom/Icon";
import {fetchFilteredLocations} from "@Store/actions/locations";
import {FilterLocationDefault} from "@Constants/locations";

const EpisodesScreen = () => {
    const dispatch = useDispatch();
    const episodesState: IEpisodeState = useSelector((state: RootState) => state.episodesState);
    const [filteredValues, setFilteredValues] = useState<IFilterEpisode>(FilterEpisodeDefault);
    const [isFiltered, setIsFiltered] = useState(false);


    useEffect(() => {
        setFilteredValues(filteredValues);
        dispatch(fetchFilteredEpisodes(filteredValues));
    }, [filteredValues]);

    function handleRemoveComplexFilter() {
        dispatch(fetchFilteredLocations(FilterLocationDefault));
        setIsFiltered(false);
    }

    return (
        <>
            <CustomTitle>
                List of all Episodes
            </CustomTitle>
            <CustomGridCenterItems>
                <TransitionsModal button={"Complex Filter"} title={"Complex Filter"} topicCriteria={EpisodeCriteria}
                                  initialValues={ValuesEpisodesCriteria} setFilteredValues={setFilteredValues}
                                  setIsFiltered={setIsFiltered}
                />
                {isFiltered && <CustomClearIcon onClick={handleRemoveComplexFilter}/>}
            </CustomGridCenterItems>
            {getEpisodes(episodesState).length > 0 && (
                <Datatable columns={EpisodesTableColumns} rows={getEpisodes(episodesState)} topic={"episodes"}
                           filter={EpisodesFilterOptions} state={episodesState} getTopic={getEpisodes}/>)}
        </>
    );
};

export default EpisodesScreen